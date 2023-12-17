import { AbstractState } from "./abstract-state";

// 12.2.5.46 Comment less-than sign state
// Consume the next input character:
// ↪ U+0021 EXCLAMATION MARK (!)
// Append the current input character to the comment token's data. Switch to the comment less-than sign bang state.
// ↪ U+003C LESS-THAN SIGN (<)
// Append the current input character to the comment token's data.
// ↪ Anything else
// Reconsume in the comment state.
export class CommentLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
