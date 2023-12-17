import { AbstractState } from "./abstract-state";

// 12.2.5.68 Bogus DOCTYPE state
// Consume the next input character:
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the DOCTYPE token.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Ignore the character.
// ↪ EOF
// Emit the DOCTYPE token. Emit an end-of-file token.
// ↪ Anything else
// Ignore the character.
export class BogusDOCTYPEState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
