import { StateCallbacks } from "./state-callbacks";

export interface State {

  callbacks: StateCallbacks;

  consume(character: string): void;

}
