import { AbstractState } from "./abstract-state";

// 12.2.5.52 Comment end bang state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Append two U+002D HYPHEN-MINUS characters (-) and a U+0021 EXCLAMATION MARK character (!) to the comment token's
// data. Switch to the comment end dash state p1110.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an incorrectly-closed-comment p1078 parse error p1077. Switch to the data state p1094. Emit the comment token.
// ↪ EOF
// This is an eof-in-comment p1078 parse errorp1077. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append two U+002D HYPHEN-MINUS characters (-) and a U+0021 EXCLAMATION MARK character (!) to the comment token's
// data. Reconsume p1093 in the comment state p1109.
export class CommentEndBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
