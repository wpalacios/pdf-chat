import { mockAnswerResponseBody } from '__mocks__/answer-response';
import { mockQuestion } from '__mocks__/question';
import { PDFChat, PDFViewer } from 'components/organisms';
import { TEST_PDF_URL } from 'constants/config';
import { HTTP_STATUS } from 'constants/http-status';
import { usePdfChat, usePdfChatDispatch, useQuestionService } from 'hooks';
import { useCallback, useState } from 'react';
import { ChatActionTypes, PdfViewerActionTypes } from 'reducers';
import { InnerTemplate } from 'templates';

const ChatPage = (): React.ReactElement => {
  const { createAnswerResponse } = useQuestionService();
  const [loading, setLoading] = useState<boolean>(false);
  const { entries, message } = usePdfChat();
  const dispatch = usePdfChatDispatch();

  const handleResponseClick = useCallback(
    (page: number) => {
      dispatch({
        type: PdfViewerActionTypes.UpdatePage,
        payload: { pdfViewer: { page: page - 1 } }
      });
    },
    [dispatch]
  );

  const handleMessageChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({
        type: ChatActionTypes.UpdateMessage,
        payload: { message: event.target.value }
      });
    },
    [dispatch]
  );

  const submitMessage = useCallback(async () => {
    const resp = await createAnswerResponse({
      question: message,
      ...mockQuestion
    });

    if (resp.status === HTTP_STATUS.OK && resp.data) {
      dispatch({
        type: ChatActionTypes.Add,
        payload: { entry: { type: 'response', value: resp.data } }
      });
      dispatch({
        type: ChatActionTypes.UpdateMessage,
        payload: { message: '' }
      });
    }
  }, [createAnswerResponse, dispatch, message]);

  const fakeSubmitMessage = useCallback(
    () =>
      dispatch({
        type: ChatActionTypes.Add,
        payload: { entry: { type: 'response', value: mockAnswerResponseBody } }
      }),
    [dispatch]
  );

  const handleMessageSubmit = useCallback(async () => {
    try {
      if (!message) return;

      setLoading(true);
      dispatch({
        type: ChatActionTypes.UpdateMessage,
        payload: { message: '' }
      });
      dispatch({
        type: ChatActionTypes.Add,
        payload: { entry: { type: 'question', value: message } }
      });

      if (process.env.REACT_APP_API_ENV === 'local') {
        fakeSubmitMessage();
      } else {
        submitMessage();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [fakeSubmitMessage, submitMessage, setLoading, dispatch, message]);

  return (
    <InnerTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <div className="flex flex-col h-[calc(50vh-64px)] sm:h-[calc(100vh-104px)]">
          <div className="max-h-full">
            <PDFViewer fileUrl={TEST_PDF_URL} />
          </div>
        </div>
        <div className="flex flex-col relative h-[calc(50vh)] sm:h-[calc(100vh-64px)] border-2">
          <PDFChat
            message={message}
            entries={entries}
            isLoading={loading}
            onMessageChange={handleMessageChange}
            onMessageSubmit={handleMessageSubmit}
            onResponseClick={handleResponseClick}
          />
        </div>
      </div>
    </InnerTemplate>
  );
};

export default ChatPage;
