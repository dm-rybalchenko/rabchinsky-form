import InputMask from 'react-input-mask';
import cn from 'classnames';

import { IInputProps } from './input.types';

import stl from './input.module.scss';


export default function Input({
  mask,
  type,
  placeholder,
  onFocus,
  register,
  modClass,
}: IInputProps): JSX.Element {
  return (
    <>
      {mask ? (
        <InputMask
          onFocus={onFocus}
          {...register}
          type={type}
          placeholder={placeholder}
          className={cn(stl.input, modClass)}
          mask={mask}
          maskChar={null}
        />
      ) : (
        <input
          onFocus={onFocus}
          {...register}
          type={type}
          placeholder={placeholder}
          className={cn(stl.input, modClass)}
        />
      )}
    </>
  );
}
