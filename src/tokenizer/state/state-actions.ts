import { State } from ".";
import { CharacterToken } from "../token";

export interface StateActions {
  switchState: (state: State) => void;
  setReturnState: (returnState: State) => void;

  createCommentToken: (data: string) => void;
  createDOCTYPEToken: () => void;
  createStartTagToken: (name: string) => void;
  createEndTagToken: (name: string) => void;

  startNewTagAttribute: (name: string, value: string) => void;

  setDOCTYPETokenName: (name: string) => void;
  setDOCTYPETokenSystemIdentifier: (publicIdentifier: string) => void;
  setDOCTYPETokenPublicIdentifier: (systemIdentifier: string) => void;
  setDOCTYPETokenForceQuirks: (forceQuirks: 'on' | 'off') => void;

  emitCharacterToken: (token: CharacterToken) => void;
  emitCommentToken: () => void;
  emitDOCTYPEToken: () => void;
  emitStartTagToken: () => void;
  emitEndTagToken: () => void;
  emitEndOfFileToken: () => void;

  setTemporaryBuffer: (data: string) => void;
  appendToTemporaryBuffer: (data: string) => void;

  reconsumeInState: (character: string, state?: State) => void;
  reconsumeInReturnState: (character: string) => void;

  setCharacterReferenceCode: (code: number) => void;
  flushCodePoints: () => void;
}
