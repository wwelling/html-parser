import { AbstractState } from "./abstract-state";

// 12.2.5.47 Comment less-than sign bang state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment less-than sign bang dash state p1109.
// ↪ Anything else
// Reconsume p1093 in the comment state p1109.
export class CommentLessThanSignBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
