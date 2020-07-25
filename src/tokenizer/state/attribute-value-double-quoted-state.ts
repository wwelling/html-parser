import { AbstractState } from "./abstract-state";

export class AttributeValueDoubleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
