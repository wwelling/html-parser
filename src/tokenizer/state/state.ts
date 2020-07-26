import { StateActions } from "./state-actions";
import { States } from ".";

export interface State {

  states: States;

  actions: StateActions;

  consume(character: string): void;

}
