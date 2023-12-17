import { AbstractState } from "./abstract-state";

// 12.2.5.69 CDATA section state
// Consume the next input character:
// ↪ U+005D RIGHT SQUARE BRACKET (])
// Switch to the CDATA section bracket state.
// ↪ EOF
// This is an eof-in-cdata parse error. Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character as a character token.

// NOTE: U+0000 NULL characters are handled in the tree construction stage, as part of the in foreign content p1158 insertion mode, which is
// the only place where CDATA sections can appear
export class CDATASectionState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
