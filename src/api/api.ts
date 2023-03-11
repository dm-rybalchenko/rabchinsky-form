import { IFeedbackModel } from '../interfaces/apiModels.types';


export default class ApiService {
  static async sendForm(
    number: string,
    name: string,
    message: string
  ): Promise<IFeedbackModel> {
    const formData = { number, name, message };
    await fakeServerDelay(1000);
	// throw new Error('Checking errors')
    return formData;
  }
}

function fakeServerDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
