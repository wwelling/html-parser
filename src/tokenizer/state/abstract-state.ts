import { State, States } from ".";
import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from "../token";
import { StateActions } from "./state-actions";

export abstract class AbstractState {

  states: States;

  actions: StateActions;

  constructor(states: States, actions: StateActions) {
    this.states = states;
    this.actions = actions;
  }

  switchState(state: State): void {
    this.actions.switchState(state);
  }

  setReturnState(returnState: State): void {
    this.actions.setReturnState(returnState);
  }

  createCharacterToken(data: string): void {
    this.actions.createCharacterToken(data);
  }

  createCommentToken(data: string): void {
    this.actions.createCommentToken(data);
  }

  createDOCTYPEToken(): void {
    this.actions.createDOCTYPEToken();
  }

  createEndTagToken(name: string): void {
    this.actions.createEndTagToken(name);
  }

  createStartTagToken(name: string): void {
    this.actions.createStartTagToken(name);
  }

  emitCharacterToken(token: CharacterToken): void {
    this.actions.emitCharacterToken(token);
  }

  emitCommentToken(token: CommentToken): void {
    this.actions.emitCommentToken(token);
  }

  emitDOCTYPEToken(token: DOCTYPEToken): void {
    this.actions.emitDOCTYPEToken(token);
  }

  emitEndOfFileToken(): void {
    this.actions.emitEndOfFileToken();
  }

  emitEndTagToken(token: EndTagToken): void {
    this.actions.emitEndTagToken(token);
  }

  emitStartTagToken(token: StartTagToken): void {
    this.actions.emitStartTagToken(token);
  }

  setTemporaryBuffer(data: string): void {
    this.actions.setTemporaryBuffer(data);
  }

  appendToTemporaryBuffer(data: string): void {
    this.actions.appendToTemporaryBuffer(data);
  }

  reconsume(character: string, state?: State): void {
    this.actions.reconsume(character, state);
  }

  reconsumeInReturnState(character: string): void {
    this.actions.reconsumeInReturnState(character);
  }

  flushCodePoints(): void {
    this.flushCodePoints();
  }

}
