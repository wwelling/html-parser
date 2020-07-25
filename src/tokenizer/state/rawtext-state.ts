import { AbstractState } from "./abstract-state";

// 12.2.5.3 RAWTEXT state
// Consume the next input character:
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the RAWTEXT less-than sign state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Emit a U+FFFD REPLACEMENT CHARACTER character token.
// ↪ EOF
// Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character as a character token.
export class RAWTEXTState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
