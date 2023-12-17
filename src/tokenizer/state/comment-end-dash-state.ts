import { AbstractState } from "./abstract-state";

// 12.2.5.50 Comment end dash state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment end state
// ↪ EOF
// This is an eof-in-comment parse error. Emit the comment token. Emit an end-of-file token.
// ↪ Anything else
// Append a U+002D HYPHEN-MINUS character (-) to the comment token's data. Reconsume in the comment state.
export class CommentEndDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
