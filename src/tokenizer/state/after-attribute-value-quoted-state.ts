import { AbstractState } from "./abstract-state";

export class AfterAttributeValueQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
