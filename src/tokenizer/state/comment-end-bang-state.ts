import { AbstractState } from "./abstract-state";

// 12.2.5.52 Comment end bang state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Append two U+002D HYPHEN-MINUS characters (-) and a U+0021 EXCLAMATION MARK character (!) to the comment token's
// data. Switch to the comment end dash state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an incorrectly-closed-comment parse error. Switch to the data state. Emit the comment token.
// ↪ EOF
// This is an eof-in-comment parse error. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append two U+002D HYPHEN-MINUS characters (-) and a U+0021 EXCLAMATION MARK character (!) to the comment token's
// data. Reconsume in the comment state.
export class CommentEndBangState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
