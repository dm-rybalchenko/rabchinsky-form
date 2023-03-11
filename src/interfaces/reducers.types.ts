import { IFeedbackModel } from './apiModels.types';


export interface IFeedback {
  feedback: null | IFeedbackModel;
}

export interface INotification {
  error: null | string;
  success: null | string;
}

export interface IPopup {
  popup: boolean;
}
