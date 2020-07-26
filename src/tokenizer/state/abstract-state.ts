import { State, States } from ".";
import Token from "../token";
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

  emit(token: Token): void {
    this.actions.emit(token);
  }

}
