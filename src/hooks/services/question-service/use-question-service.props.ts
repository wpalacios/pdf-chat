import { AxiosResponse } from 'axios';
import { AnswerResponseBody, QuestionRequestBody } from 'types/models';

export default interface IUseChatService {
  createAnswerResponse: (body: QuestionRequestBody) => Promise<AxiosResponse<AnswerResponseBody>>;
}
