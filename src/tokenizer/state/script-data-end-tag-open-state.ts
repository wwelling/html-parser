import { AbstractState } from "./abstract-state";

export class ScriptDataEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
