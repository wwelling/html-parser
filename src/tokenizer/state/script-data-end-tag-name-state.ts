import { AbstractState } from "./abstract-state";

export class ScriptDataEndTagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
