import { AbstractState } from "./abstract-state";

export class DecimalCharacterReferenceStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
