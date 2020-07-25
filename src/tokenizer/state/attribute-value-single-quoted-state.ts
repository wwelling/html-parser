import { AbstractState } from "./abstract-state";

export class AttributeValueSingleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
