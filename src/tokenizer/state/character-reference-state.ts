import { AbstractState } from "./abstract-state";

// 12.2.5.72 Character reference state
// Set the temporary buffer p1093 to the empty string. Append a U+0026 AMPERSAND (&) character to the temporary buffer p1093. Consume
// the next input character p1088:
// ↪ ASCII alphanumeric
// Reconsume p1093 in the named character reference state p1118.
// ↪ U+0023 NUMBER SIGN (#)
// Append the current input character p1088 to the temporary buffer p1093. Switch to the numeric character reference state p1119.
// ↪ Anything else
// Flush code points consumed as a character reference p1093.
// Reconsume p1093 in the return state p1093.
export class CharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
