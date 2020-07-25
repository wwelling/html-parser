import { AbstractState } from "./abstract-state";

// 12.2.5.41 Bogus comment state
// Consume the next input character p1088:
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the comment token.
// ↪ EOF
// Emit the comment. Emit an end-of-file token.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the
// comment token's data.
// ↪ Anything else
// Append the current input character p1088 to the comment token's data.
export class BogusCommentState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
