import { UseFormRegisterReturn } from 'react-hook-form';


type TFieldValues = 'message';

export interface ITextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn<TFieldValues>;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  modClass: string;
}
