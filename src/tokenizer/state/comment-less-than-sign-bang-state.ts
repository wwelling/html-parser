import { AbstractState } from "./abstract-state";

// 12.2.5.47 Comment less-than sign bang state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment less-than sign bang dash state.
// ↪ Anything else
// Reconsume in the comment state.
export class CommentLessThanSignBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
