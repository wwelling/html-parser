import { AbstractState } from "./abstract-state";

export class NumericCharacterReferenceEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
