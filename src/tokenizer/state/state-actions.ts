import { State } from ".";
import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from "../token";

export interface StateActions {
  switchState: (state: State) => void;
  setReturnState: (returnState: State) => void;
  createCharacterToken: (data: string) => void;
  createCommentToken: (data: string) => void;
  createDOCTYPEToken: () => void;
  createEndTagToken: (name: string) => void;
  createStartTagToken: (name: string) => void;
  emitCharacterToken: (token: CharacterToken) => void;
  emitCommentToken: (token: CommentToken) => void;
  emitDOCTYPEToken: (token: DOCTYPEToken) => void;
  emitEndOfFileToken: () => void;
  emitEndTagToken: (token: EndTagToken) => void;
  emitStartTagToken: (token: StartTagToken) => void;
  setTemporaryBuffer: (data: string) => void;
  appendToTemporaryBuffer: (data: string) => void;
  reconsumeInState: (character: string, state?: State) => void;
  reconsumeInReturnState: (character: string) => void;
  setCharacterReferenceCode: (code: number) => void;
  flushCodePoints: () => void;
}
