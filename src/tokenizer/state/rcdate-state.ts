import { AbstractState } from "./abstract-state";

// 12.2.5.2 RCDATA state
// Consume the next input character:
// ↪ U+0026 AMPERSAND (&)
// Set the return state to the RCDATA state. Switch to the character reference state.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the RCDATA less-than sign state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Emit a U+FFFD REPLACEMENT CHARACTER character token.
// ↪ EOF
// Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character as a character token.
export class RCDATAState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
