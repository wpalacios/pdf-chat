import { PdfChatContext, PdfChatDispatchContext } from 'contexts';
import { useContext } from 'react';

const usePdfChat = () => useContext(PdfChatContext);

const usePdfChatDispatch = () => useContext(PdfChatDispatchContext);

export { usePdfChatDispatch, usePdfChat };
