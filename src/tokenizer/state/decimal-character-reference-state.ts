import { AbstractState } from "./abstract-state";

export class DecimalCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
