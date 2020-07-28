import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from "./token";

export interface TokenizerCallbacks {
  emitCharacterToken: (token: CharacterToken) => void;
  emitCommentToken: (token: CommentToken) => void;
  emitDOCTYPEToken: (token: DOCTYPEToken) => void;
  emitStartTagToken: (token: StartTagToken) => void;
  emitEndTagToken: (token: EndTagToken) => void;
  emitEndOfFileToken: () => void;
  onEnd: () => void;
}
