import { AbstractState } from "./abstract-state";

export class ScriptDataDoubleEscapedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
