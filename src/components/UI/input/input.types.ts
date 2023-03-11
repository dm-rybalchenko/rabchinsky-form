import { UseFormRegisterReturn } from 'react-hook-form';


type TFieldValues = 'number' | 'name' | 'message';

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<TFieldValues>;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  modClass: string;
  mask?: string;
}
