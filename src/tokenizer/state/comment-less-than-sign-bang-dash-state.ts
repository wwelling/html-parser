import { AbstractState } from "./abstract-state";

export class CommentLessThanSignBangDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
