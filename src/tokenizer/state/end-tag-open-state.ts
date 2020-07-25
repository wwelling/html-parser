import { AbstractState } from "./abstract-state";

export class EndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
