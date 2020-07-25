import { AbstractState } from "./abstract-state";

// 12.2.5.74 Ambiguous ampersand state
// Consume the next input character p1088:
// ↪ ASCII alphanumeric
// If the character reference was consumed as part of an attribute p1093, then append the current input character p1088 to the current
// attribute's value. Otherwise, emit the current input character p1088 as a character token.
// ↪ U+003B SEMICOLON (;)
// This is an unknown-named-character-reference p1081 parse error p1077. Reconsume p1093 in the return state p1093.
// ↪ Anything else
// Reconsume p1093 in the return state p1093.
export class AmbiguousAmpersandState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
