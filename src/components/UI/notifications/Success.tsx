import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { clearSuccess } from '../../../store/reducers/notificationReducer';
import IconSuccess from '../icons/IconSuccess';

import stl from './notifications.module.scss';


export default function Success(): JSX.Element {
  const { success } = useTypedSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => dispatch(clearSuccess()), 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${stl.container} ${stl.success}`}>
      <div>
        <IconSuccess />
        {success || 'Успешно!'}
      </div>
      <button
        onClick={(): void => {
          dispatch(clearSuccess());
        }}
        className={stl.close}
      >
        Ок
      </button>
    </div>
  );
}
