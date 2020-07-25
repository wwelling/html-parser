import { AbstractState } from "./abstract-state";

// 12.2.5.75 Numeric character reference state
// Set the character reference code to zero (0).
// Consume the next input character p1088:
// ↪ U+0078 LATIN SMALL LETTER X
// ↪ U+0058 LATIN CAPITAL LETTER X
// Append the current input character p1088 to the temporary buffer p1093. Switch to the hexadecimal character reference start
// state p1119.
// ↪ Anything else
// Reconsume p1093 in the decimal character reference start state p1120.
export class NumericCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
