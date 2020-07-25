import { AbstractState } from "./abstract-state";

export class BogusCommentState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
