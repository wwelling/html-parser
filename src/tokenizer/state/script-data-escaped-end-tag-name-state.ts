import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedEndTagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
