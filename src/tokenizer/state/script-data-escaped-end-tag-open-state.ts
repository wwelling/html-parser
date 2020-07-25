import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
