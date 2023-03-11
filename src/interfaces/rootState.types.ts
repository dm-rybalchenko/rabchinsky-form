import { IFeedback, INotification, IPopup } from './reducers.types';


export interface IRootState {
  feedback: IFeedback;
  notification: INotification;
  popup: IPopup;
}
