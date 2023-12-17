import { AbstractState } from "./abstract-state";

// 12.2.5.53 DOCTYPE state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before DOCTYPE name state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Reconsume in the before DOCTYPE name state.
// ↪ EOF
// This is an eof-in-doctype parse error. Create a new DOCTYPE token. Set its force-quirks flag to on. Emit the token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-whitespace-before-doctype-name parse error.
// Reconsume in the before DOCTYPE name state.
export class DOCTYPEState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
