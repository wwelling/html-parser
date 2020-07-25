import { AbstractState } from "./abstract-state";

// 12.2.5.51 Comment end state
// Consume the next input character p1088:
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the comment token.
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the comment end bang state p1110.
// ↪ U+002D HYPHEN-MINUS (-)
// Append a U+002D HYPHEN-MINUS character (-) to the comment token's data.
// ↪ EOF
// This is an eof-in-comment p1078 parse error p1077. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append two U+002D HYPHEN-MINUS characters (-) to the comment token's data. Reconsume p1093 in the comment state p1109.
export class CommentEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
