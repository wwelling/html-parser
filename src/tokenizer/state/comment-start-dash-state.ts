import { AbstractState } from "./abstract-state";

// 12.2.5.44 Comment start dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment end state p1110
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-closing-of-empty-comment p1077 parse error p1077. Switch to the data state p1094. Emit the comment token.
// ↪ EOF
// This is an eof-in-comment p1078 parse error p1077. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append a U+002D HYPHEN-MINUS character (-) to the comment token's data. Reconsume p1093 in the comment state p1109.
export class CommentStartDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
