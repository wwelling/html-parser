import { AbstractState } from "./abstract-state";

export class ScriptDataDoubleEscapeEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
