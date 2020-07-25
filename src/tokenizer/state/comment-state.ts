import { AbstractState } from "./abstract-state";

// 12.2.5.45 Comment state
// Consume the next input character p1088:
// ↪ U+003C LESS-THAN SIGN (<)
// Append the current input character p1088 to the comment token's data. Switch to the comment less-than sign state p1109.
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment end dash state p1110.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the
// comment token's data.
// ↪ EOF
// This is an eof-in-comment p1078 parse error p1077. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the comment token's data.
export class CommentState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
