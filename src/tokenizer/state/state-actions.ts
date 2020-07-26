import { State } from ".";
import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from "../token";

export interface StateActions {
  switchState: (state: State) => void;
  setReturnState: (returnState: State) => void;
  emitCharacterToken: (token: CharacterToken) => void;
  emitCommentToken: (token: CommentToken) => void;
  emitDOCTYPEToken: (token: DOCTYPEToken) => void;
  emitEndOfFileToken: () => void;
  emitEndTagToken: (token: EndTagToken) => void;
  emitStartTagToken: (token: StartTagToken) => void;
  reconsume: (state?: State) => void;
}
