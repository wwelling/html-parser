import { AbstractState } from "./abstract-state";

export class PLAINTEXTState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
