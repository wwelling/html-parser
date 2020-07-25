import { AbstractState } from "./abstract-state";

export class HexadecimalCharacterReferenceStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
