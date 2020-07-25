import { AbstractState } from "./abstract-state";

export class AfterAttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
