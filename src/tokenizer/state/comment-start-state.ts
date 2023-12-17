import { AbstractState } from "./abstract-state";

// 12.2.5.43 Comment start state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment start dash state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-closing-of-empty-comment parse error. Switch to the data state. Emit the comment token.
// ↪ Anything else
// Reconsume in the comment state.
export class CommentStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
