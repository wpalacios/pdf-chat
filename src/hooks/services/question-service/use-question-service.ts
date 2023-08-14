import axios, { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import IUseChatService from './use-question-service.props';
import { qaServiceURL } from './use-question-service.url';
import { AnswerResponseBody, QuestionRequestBody } from 'types/models';

const useQuestionService = (): IUseChatService => {
  const createAnswerResponse = useCallback(
    (data: QuestionRequestBody): Promise<AxiosResponse<AnswerResponseBody>> => {
      return axios.post(qaServiceURL, data);
    },
    []
  );

  return { createAnswerResponse };
};

export default useQuestionService;
