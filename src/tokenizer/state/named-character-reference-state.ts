import { AbstractState } from "./abstract-state";

export class NamedCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
