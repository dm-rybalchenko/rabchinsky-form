import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';

import {
  showError,
  showSuccess,
} from '../../store/reducers/notificationReducer';
import { closePopup } from '../../store/reducers/popupReducer';
import { setFeedback } from '../../store/reducers/feedbackReducer';
import useFetching from '../../hooks/useFetching';
import ApiService from '../../api/api';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import Textarea from '../UI/textarea/Textarea';
import Loader from '../UI/loader/Loader';

import { IForm } from './Form.types';

import stl from './Form.module.scss';


const regExpText = /[#&<>{}`^[\]|\\]/gm;
const regExpPhone = /^\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d$/gm;
const errMessage = 'Cимволы #&<>{}`^[]|\\ запрещены';

function Form(): JSX.Element {
  const dispatch = useDispatch();
  const [fieldsErr, setFieldsErr] = useState<string[]>([
    'number',
    'name',
    'message',
  ]);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IForm>({
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
  });

  const [sendForm, isLoading, success, error] = useFetching<string>(
    async (number: string, name: string, message: string) => {
      const response = await ApiService.sendForm(number, name, message);

      dispatch(setFeedback(response));
      dispatch(showSuccess('Данные успешно отправлены'));
      dispatch(closePopup());
    }
  );

  const onSendForm: SubmitHandler<IForm> = (data) => {
    const number = data.number.replace(/\s|-|\(|\)/g, '');

    sendForm(number, data.name, data.message);
  };

  const onError: SubmitErrorHandler<typeof errors> = (data) => {
    setFieldsErr(Object.keys(data));
  };

  useEffect(() => {
    error && dispatch(showError(`Ошибка отправки данных: ${error}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Форма обратной связи</h2>
      <form
        onSubmit={handleSubmit(onSendForm, onError)}
        className={stl.form}
        noValidate
      >
        <div className={cn({ [stl.success]: !fieldsErr.includes('number') })}>
          <Input
            mask="+9 (999) 999-99-99"
            register={register('number', {
              required: 'Нужно ввести ваш номер телефона',
              validate: (value) =>
                !!value.match(regExpPhone) ||
                'Введите номер по форме +7 (999) 999-99-99',
            })}
            onFocus={(): void => {
              clearErrors('number');
              setFieldsErr([...fieldsErr, 'number']);
            }}
            placeholder="Номер"
            type="tel"
            modClass={cn({ [stl.error]: errors.number })}
          />
          {errors.number && (
            <div className={stl['errors-box']}>{errors.number.message}</div>
          )}
        </div>
        <div className={cn({ [stl.success]: !fieldsErr.includes('name') })}>
          <Input
            register={register('name', {
              required: 'Нужно ввести имя',
              validate: (value) => !value.match(regExpText) || errMessage,
            })}
            onFocus={(): void => {
              clearErrors('name');
              setFieldsErr([...fieldsErr, 'name']);
            }}
            placeholder="Имя"
            type="text"
            modClass={cn({ [stl.error]: errors.name })}
          />
          {errors.name && (
            <div className={stl['errors-box']}>{errors.name.message}</div>
          )}
        </div>
        <div className={cn({ [stl.success]: !fieldsErr.includes('message') })}>
          <Textarea
            register={register('message', {
              required: 'Нужно ввести сообщение',
              validate: (value) => !value.match(regExpText) || errMessage,
            })}
            onFocus={(): void => {
              clearErrors('message');
              setFieldsErr([...fieldsErr, 'message']);
            }}
            placeholder="Сообщение"
            modClass={cn({ [stl.error]: errors.message })}
          />
          {errors.message && (
            <div className={stl['errors-box']}>{errors.message.message}</div>
          )}
        </div>
        <Button>Отправить</Button>
      </form>
    </div>
  );
}

export default Form;
