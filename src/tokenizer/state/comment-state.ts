import { AbstractState } from "./abstract-state";

// 12.2.5.45 Comment state
// Consume the next input character:
// ↪ U+003C LESS-THAN SIGN (<)
// Append the current input character to the comment token's data. Switch to the comment less-than sign state.
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment end dash state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the
// comment token's data.
// ↪ EOF
// This is an eof-in-comment parse error. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the comment token's data.
export class CommentState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
