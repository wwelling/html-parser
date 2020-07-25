import { AbstractState } from "./abstract-state";

// 12.2.5.76 Hexadecimal character reference start state
// Consume the next input character p1088:
// ↪ ASCII hex digit
// Reconsume p1093 in the hexadecimal character reference state p1120.
// ↪ Anything else
// This is an absence-of-digits-in-numeric-character-reference p1077 parse error p1077. Flush code points consumed as a character
// reference p1093. Reconsume p1093 in the return state p1093.
export class HexadecimalCharacterReferenceStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
