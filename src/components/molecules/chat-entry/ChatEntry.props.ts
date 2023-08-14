import { MouseEventHandler } from 'react';
import { ChatEntry } from 'types';

interface ChatEntryProps {
  entry: ChatEntry;
  onClick?: (page: number) => void;
}
export default ChatEntryProps;
