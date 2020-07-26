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

}
