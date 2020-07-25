import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
