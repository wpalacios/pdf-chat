import { ActionMap, ChatEntry } from 'types';

export enum ChatActionTypes {
  Add = 'CREATE_ENTRY',
  UpdateMessage = 'UPDATE_MESSAGE'
}

export interface ChatReducerState {
  entries: ChatEntry[];
  message: string;
}

interface ChatReducerPayload {
  [ChatActionTypes.Add]: {
    entry: ChatEntry;
  };
  [ChatActionTypes.UpdateMessage]: {
    message: string;
  };
}

export type ChatActions = ActionMap<ChatReducerPayload>[keyof ActionMap<ChatReducerPayload>];

export const chatReducer = (state: ChatReducerState, action: ChatActions): ChatReducerState => {
  switch (action.type) {
    case ChatActionTypes.Add:
      return {
        message: state.message,
        entries: [...state.entries, action.payload.entry]
      };
    case ChatActionTypes.UpdateMessage:
      return {
        entries: state.entries,
        message: action.payload.message
      };
    default:
      return state;
  }
};
