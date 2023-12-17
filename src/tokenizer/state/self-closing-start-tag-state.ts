import { AbstractState } from "./abstract-state";

// 12.2.5.40 Self-closing start tag state
// Consume the next input character:
// ↪ U+003E GREATER-THAN SIGN (>)
// Set the self-closing flag of the current tag token. Switch to the data state. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// This is an unexpected-solidus-in-tag parse error.
// Reconsume in the before attribute name state.
export class SelfClosingStartTagState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
