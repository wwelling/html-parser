import { AbstractState } from "./abstract-state";

// 12.2.5.50 Comment end dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment end state p1110
// ↪ EOF
// This is an eof-in-comment p1078 parse error p1077. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append a U+002D HYPHEN-MINUS character (-) to the comment token's data. Reconsume p1093 in the comment state p1109.
export class CommentEndDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
