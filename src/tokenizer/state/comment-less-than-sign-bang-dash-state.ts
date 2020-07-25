import { AbstractState } from "./abstract-state";

// 12.2.5.48 Comment less-than sign bang dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment less-than sign bang dash dash state p1109.
// ↪ Anything else
// Reconsume p1093 in the comment end dash state p1110.
export class CommentLessThanSignBangDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
