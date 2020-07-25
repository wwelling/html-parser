import { AbstractState } from "./abstract-state";

export class CommentEndBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
