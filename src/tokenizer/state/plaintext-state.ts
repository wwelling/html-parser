import { AbstractState } from "./abstract-state";

// 12.2.5.5 PLAINTEXT state
// Consume the next input character p1088:
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Emit a U+FFFD REPLACEMENT CHARACTER character token.
// ↪ EOF
// Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character p1088 as a character token.
export class PLAINTEXTState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
