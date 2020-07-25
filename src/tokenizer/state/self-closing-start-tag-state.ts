import { AbstractState } from "./abstract-state";

export class SelfClosingStartTagState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
