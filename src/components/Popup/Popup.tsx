import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closePopup } from '../../store/reducers/popupReducer';

import { IPopupProps } from './Popup.types';

import stl from './Popup.module.scss';


function Popup({ children }: IPopupProps): JSX.Element {
  const dispatch = useDispatch();

  const exitPopup = (): void => {
    document.body.classList.remove('block');
    dispatch(closePopup());
  };

  useEffect(() => {
    document.body.classList.add('block');
  }, []);

  return (
    <div onClick={exitPopup} className={stl.wrapper}>
      <button onClick={exitPopup} className={stl.close} />
      <div onClick={(e): void => e.stopPropagation()} className={stl.container}>
        {children}
      </div>
    </div>
  );
}

export default Popup;
