import { ActionMap, PdfViewer } from 'types';

export enum PdfViewerActionTypes {
  UpdatePage = 'UPDATE_VIEWER'
}

interface PdfViewerReducerPayload {
  [PdfViewerActionTypes.UpdatePage]: {
    pdfViewer: PdfViewer;
  };
}

export type PdfViewerActions =
  ActionMap<PdfViewerReducerPayload>[keyof ActionMap<PdfViewerReducerPayload>];

export const pdfViewerReducer = (state: PdfViewer, action: PdfViewerActions): PdfViewer => {
  switch (action.type) {
    case PdfViewerActionTypes.UpdatePage:
      return {
        ...state,
        ...action.payload.pdfViewer
      };
    default:
      return state;
  }
};
