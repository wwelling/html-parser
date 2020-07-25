import { AbstractState } from "./abstract-state";

export class CharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
