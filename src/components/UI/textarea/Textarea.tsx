import cn from 'classnames';

import { ITextareaProps } from './Textarea.types';

import stl from './Textarea.module.scss';


function Textarea({
  register,
  onFocus,
  placeholder,
  modClass,
}: ITextareaProps): JSX.Element {
  return (
    <textarea
      {...register}
      onFocus={onFocus}
      placeholder={placeholder}
      className={cn(stl.textarea, modClass)}
    />
  );
}

export default Textarea;
