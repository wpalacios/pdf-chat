import { Icon } from 'components/atoms';
import { ChatEntry, IconTextArea } from 'components/molecules';
import { KEYWORDS } from 'constants/config';
import { CHAT_PAGE_LABELS } from 'constants/labels';
import { useCallback } from 'react';
import PDFChatProps from './PDFChat.props';

// TODO: Implement auto-growing for text area and auto-scrolling for entries
const PDFChat = ({
  message,
  entries,
  isLoading,
  onMessageChange,
  onMessageSubmit,
  onResponseClick
}: PDFChatProps): React.ReactElement => {
  const { ENTER } = KEYWORDS;

  const handleKeyPress = useCallback(
    (key: string) => {
      if (key === ENTER) {
        onMessageSubmit();
      }
    },
    [onMessageSubmit, ENTER]
  );

  return (
    <>
      <div className="h-full w-full overflow-y-scroll">
        {entries?.map((entry, idx) => (
          <ChatEntry key={`entry-${idx}`} entry={entry} onClick={onResponseClick} />
        ))}
        <div className="h-20"></div>
      </div>
      <div className="flex absolute bottom-0 bg-gray-200 p-3 w-full border">
        <div className="w-1/12 flex justify-center text-center items-center">
          <Icon icon={'magic-pen'} width="1.5rem" height="1.5rem" />
        </div>
        <div className="w-11/12">
          <IconTextArea
            icon={
              <button type="button" onClick={onMessageSubmit} disabled={isLoading}>
                {isLoading && (
                  <Icon
                    icon="spinner"
                    width="1rem"
                    height="1rem"
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  />
                )}
                {!isLoading && <Icon icon="flying-message" width="1rem" height="1rem" />}
              </button>
            }
            name="question"
            id="question"
            value={message}
            onChange={onMessageChange}
            onKeyDown={({ key }) => handleKeyPress(key)}
            placeholder={CHAT_PAGE_LABELS.ENTER_QUESTION}
            disabled={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default PDFChat;
