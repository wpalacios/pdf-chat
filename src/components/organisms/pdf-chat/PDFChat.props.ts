import { ChatEntry } from 'types';

interface PDFChatProps {
  message: string;
  entries: ChatEntry[];
  isLoading: boolean;
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onMessageSubmit: () => void;
  onResponseClick: (page: number) => void;
}

export default PDFChatProps;
