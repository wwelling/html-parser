import { AbstractState } from "./abstract-state";

// 12.2.5.75 Numeric character reference state
// Set the character reference code to zero (0).
// Consume the next input character:
// ↪ U+0078 LATIN SMALL LETTER X
// ↪ U+0058 LATIN CAPITAL LETTER X
// Append the current input character to the temporary buffer. Switch to the hexadecimal character reference start
// state.
// ↪ Anything else
// Reconsume in the decimal character reference start state.
export class NumericCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
