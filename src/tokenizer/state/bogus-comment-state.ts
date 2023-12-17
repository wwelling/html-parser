import { AbstractState } from "./abstract-state";

// 12.2.5.41 Bogus comment state
// Consume the next input character:
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the comment token.
// ↪ EOF
// Emit the comment. Emit an end-of-file token.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the
// comment token's data.
// ↪ Anything else
// Append the current input character to the comment token's data.
export class BogusCommentState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
