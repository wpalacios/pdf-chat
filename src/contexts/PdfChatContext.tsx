import { CHAT_PAGE_LABELS } from 'constants/labels';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { ChatActions, PdfViewerActions, chatReducer, pdfViewerReducer } from 'reducers';
import { ChatEntry, PdfViewer } from 'types';

interface ChatContextType {
  message: string;
  entries: ChatEntry[];
  pdfViewer: PdfViewer;
}

type ChatDispatchType = Dispatch<ChatActions | PdfViewerActions>;

interface PdfChatContextProviderProps {
  children: ReactNode;
}

const initialState: ChatContextType = {
  message: CHAT_PAGE_LABELS.DEFAULT_MESSAGE,
  entries: [],
  pdfViewer: { page: 0 }
};

const initialDispatchState: ChatDispatchType = () => {};

export const PdfChatContext = createContext<ChatContextType>(initialState);
export const PdfChatDispatchContext = createContext<ChatDispatchType>(initialDispatchState);

const mainReducer = (
  { entries, message, pdfViewer }: ChatContextType,
  action: ChatActions | PdfViewerActions
) => ({
  ...chatReducer({ entries, message }, action as ChatActions),
  pdfViewer: pdfViewerReducer(pdfViewer, action as PdfViewerActions)
});

export const PdfChatProvider = ({ children }: PdfChatContextProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <PdfChatContext.Provider value={state}>
      <PdfChatDispatchContext.Provider value={dispatch}>{children}</PdfChatDispatchContext.Provider>
    </PdfChatContext.Provider>
  );
};
