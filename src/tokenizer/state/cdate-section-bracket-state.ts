import { AbstractState } from "./abstract-state";

export class CDATASectionBracketState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
