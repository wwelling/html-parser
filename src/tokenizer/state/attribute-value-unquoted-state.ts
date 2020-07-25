import { AbstractState } from "./abstract-state";

export class AttributeValueUnquotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
