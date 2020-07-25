import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
