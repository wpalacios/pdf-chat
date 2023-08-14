import AnswerResponseBody from './models/question-answer.model';

export type EntryValue = string | AnswerResponseBody;

interface ChatEntry {
  type: 'question' | 'response';
  value: EntryValue;
}

export default ChatEntry;
