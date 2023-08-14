import { Button, Icon, TextLine } from 'components/atoms';
import { AnswerResponseBody } from 'types/models';
import ChatEntryProps from './ChatEntry.props';

const ChatEntry = ({ entry: { type, value }, onClick }: ChatEntryProps): React.ReactElement => {
  const styles = {
    question: {
      icon: 'user',
      bg: 'bg-white'
    },
    response: {
      bg: 'bg-gray-100',
      icon: 'assistant'
    }
  };

  return (
    <div className={`w-full  flex border border-gray-300 ${styles[type].bg}`}>
      <div className="m-3">
        <Icon icon={styles[type].icon} />
      </div>
      <div className="mt-3">
        {type === 'question' && <TextLine text={value as string} className="font-bold" />}
        {type === 'response' && (
          <>
            <TextLine text={(value as AnswerResponseBody).answer} className="font-bold" />
            {(value as AnswerResponseBody).sources?.map((source, idx) => (
              <div key={`answer-container-${idx}`}>
                <TextLine key={`answer-${idx}`} text={`${source.source_text}`} />
                {onClick && (
                  <div className="mt-2 mb-2">
                    <Button
                      key={`source-${idx}`}
                      text={`p. ${source.source_page}`}
                      onClick={() => onClick(source.source_page)}
                      className="rounded from-gray-300 to-gray-300 hover:from-gray-300 hover:to-gray-300 py-2 px-2 text-black border border-gray-300"
                    />
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatEntry;
