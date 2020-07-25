import { AbstractState } from "./abstract-state";

export class AmbiguousAmpersandState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
