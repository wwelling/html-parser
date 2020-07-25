import { AbstractState } from "./abstract-state";

export class AttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
