import { AbstractState } from "./abstract-state";

// 12.2.5.46 Comment less-than sign state
// Consume the next input character p1088:
// ↪ U+0021 EXCLAMATION MARK (!)
// Append the current input character p1088 to the comment token's data. Switch to the comment less-than sign bang state p1109.
// ↪ U+003C LESS-THAN SIGN (<)
// Append the current input character p1088 to the comment token's data.
// ↪ Anything else
// Reconsume p1093 in the comment state p1109.
export class CommentLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
