import { IButtonProps } from './Button.types';

import stl from './Button.module.scss';


function Button({ children, ...props }: IButtonProps): JSX.Element {

  return (
    <button {...props} className={stl.button}>
      {children}
    </button>
  );
}

export default Button;
