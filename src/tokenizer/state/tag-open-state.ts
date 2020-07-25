import { AbstractState } from "./abstract-state";

export class TagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
