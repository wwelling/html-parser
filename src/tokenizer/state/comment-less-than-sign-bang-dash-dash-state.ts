import { AbstractState } from "./abstract-state";

// 12.2.5.49 Comment less-than sign bang dash dash state
// Consume the next input character:
// ↪ U+003E GREATER-THAN SIGN (>)
// ↪ EOF
// Reconsume in the comment end state.
// ↪ Anything else
// This is a nested-comment parse error. Reconsume in the comment end state.
export class CommentLessThanSignBangDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
