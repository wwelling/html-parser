import { AbstractState } from "./abstract-state";

// 12.2.5.51 Comment end state
// Consume the next input character:
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the comment token.
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the comment end bang state.
// ↪ U+002D HYPHEN-MINUS (-)
// Append a U+002D HYPHEN-MINUS character (-) to the comment token's data.
// ↪ EOF
// This is an eof-in-comment parse error. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append two U+002D HYPHEN-MINUS characters (-) to the comment token's data. Reconsume in the comment state.
export class CommentEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
