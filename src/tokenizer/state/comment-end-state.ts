import { AbstractState } from "./abstract-state";

export class CommentEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
