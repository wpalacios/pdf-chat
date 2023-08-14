import { chatReducer, ChatActions, ChatActionTypes } from './chat-reducer/chat.reducer';
import {
  pdfViewerReducer,
  PdfViewerActionTypes,
  PdfViewerActions
} from './pdf-viewer-reducer/pdf-viewer.reducer';

export { chatReducer, pdfViewerReducer, ChatActionTypes, PdfViewerActionTypes };
export type { ChatActions, PdfViewerActions };
