import { AbstractState } from "./abstract-state";

// 12.2.5.36 Attribute value (double-quoted) state
// Consume the next input character:
// ↪ U+0022 QUOTATION MARK (")
// Switch to the after attribute value (quoted) state.
// ↪ U+0026 AMPERSAND (&)
// Set the return state to the attribute value (double-quoted) state. Switch to the character reference state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's value.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current attribute's value.
export class AttributeValueDoubleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
