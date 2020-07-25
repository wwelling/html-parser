import { AbstractState } from "./abstract-state";

export class CommentStartDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
