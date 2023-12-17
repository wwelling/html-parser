import { AbstractState } from "./abstract-state";

// 12.2.5.76 Hexadecimal character reference start state
// Consume the next input character:
// ↪ ASCII hex digit
// Reconsume in the hexadecimal character reference state.
// ↪ Anything else
// This is an absence-of-digits-in-numeric-character-reference parse error. Flush code points consumed as a character
// reference. Reconsume in the return state.
export class HexadecimalCharacterReferenceStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
