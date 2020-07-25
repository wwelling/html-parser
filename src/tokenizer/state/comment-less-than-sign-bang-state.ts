import { AbstractState } from "./abstract-state";

export class CommentLessThanSignBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
