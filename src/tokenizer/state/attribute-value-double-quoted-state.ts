import { AbstractState } from "./abstract-state";

// 12.2.5.36 Attribute value (double-quoted) state
// Consume the next input character p1088:
// ↪ U+0022 QUOTATION MARK (")
// Switch to the after attribute value (quoted) state p1107.
// ↪ U+0026 AMPERSAND (&)
// Set the return state p1093 to the attribute value (double-quoted) state p1105. Switch to the character reference state p1118.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's value.
// ↪ EOF
// This is an eof-in-tag p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the current attribute's value.
export class AttributeValueDoubleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
