import { AbstractState } from "./abstract-state";

// 12.2.5.79 Decimal character reference state
// Consume the next input character p1088:
// ↪ ASCII digit
// Multiply the character reference code p1119 by 10. Add a numeric version of the current input character p1088(subtract 0x0030
// from the character's code point) to the character reference code p1119.
// ↪ U + 003B SEMICOLON
// Switch to the numeric character reference end state p1120.
// ↪ Anything else
// This is a missing-semicolon-after-character-reference p1079 parse error p1077. Reconsume p1093 in the numeric character reference
// end state p1120.
export class DecimalCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
