import { AbstractState } from "./abstract-state";

// 12.2.5.56 After DOCTYPE name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// If the six characters starting from the current input character are an ASCII case-insensitive match for the word "PUBLIC",
// then consume those characters and switch to the after DOCTYPE public keyword state.
// Otherwise, if the six characters starting from the current input character are an ASCII case-insensitive match for the word
// "SYSTEM", then consume those characters and switch to the after DOCTYPE system keyword state.
// Otherwise, this is an invalid-character-sequence-after-doctype-name parse error. Set the DOCTYPE token's force-quirks
// flag to on. Reconsume in the bogus DOCTYPE state.
export class AfterDOCTYPENameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
