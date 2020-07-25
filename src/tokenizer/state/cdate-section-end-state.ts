import { AbstractState } from "./abstract-state";

export class CDATASectionEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
