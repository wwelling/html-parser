import { AbstractState } from "./abstract-state";

// 12.2.5.38 Attribute value (unquoted) state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state p1104 .
// ↪ U+0026 AMPERSAND (&)
// Set the return state p1093 to the attribute value (unquoted) state p1106. Switch to the character reference state p1118.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current tag token.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's value.
// ↪ U+0022 QUOTATION MARK (")
// ↪ U+0027 APOSTROPHE (')
// ↪ U+003C LESS-THAN SIGN (<)
// ↪ U+003D EQUALS SIGN (=)
// ↪ U+0060 GRAVE ACCENT (`)
// This is an unexpected-character-in-unquoted-attribute-value p1080 parse error p1077. Treat it as per the "anything else" entry below.
// ↪ EOF
// This is an eof-in-tag p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the current attribute's value.
export class AttributeValueUnquotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
