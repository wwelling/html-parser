import { AbstractState } from "./abstract-state";

// 12.2.5.77 Decimal character reference start state
// Consume the next input character:
// ↪ ASCII digit
// Reconsume in the decimal character reference state.
// ↪ Anything else
// This is an absence-of-digits-in-numeric-character-reference parse error. Flush code points consumed as a character
// reference. Reconsume in the return state.
export class DecimalCharacterReferenceStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
