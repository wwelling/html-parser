import { AbstractState } from "./abstract-state";

// 12.2.5.48 Comment less-than sign bang dash state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment less-than sign bang dash dash state.
// ↪ Anything else
// Reconsume in the comment end dash state.
export class CommentLessThanSignBangDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
