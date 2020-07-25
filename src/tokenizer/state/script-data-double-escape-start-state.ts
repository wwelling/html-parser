import { AbstractState } from "./abstract-state";

export class ScriptDataDoubleEscapeStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
