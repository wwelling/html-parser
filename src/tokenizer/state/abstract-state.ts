import { StateCallbacks } from "./state-callbacks";

export abstract class AbstractState {

  callbacks: StateCallbacks;

  constructor(callbacks: StateCallbacks) {
    this.callbacks = callbacks;
  }

}
