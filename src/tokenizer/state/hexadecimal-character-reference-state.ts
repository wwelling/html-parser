import { AbstractState } from "./abstract-state";

export class HexadecimalCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
