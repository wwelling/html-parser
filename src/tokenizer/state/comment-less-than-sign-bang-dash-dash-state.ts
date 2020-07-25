import { AbstractState } from "./abstract-state";

// 12.2.5.49 Comment less-than sign bang dash dash state
// Consume the next input character p1088:
// ↪ U+003E GREATER-THAN SIGN (>)
// ↪ EOF
// Reconsumep1093 in the comment end state p1110.
// ↪ Anything else
// This is a nested-comment p1079 parse error p1077.
// Reconsume p1093 in the comment end state p1110.
export class CommentLessThanSignBangDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
