import { AbstractState } from "./abstract-state";

// 12.2.5.32 Before attribute name state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+002F SOLIDUS (/)
// ↪ U+003E GREATER-THAN SIGN (>)
// ↪ EOF
// Reconsumep1093 in the after attribute name state p1105.
// ↪ U+003D EQUALS SIGN (=)
// This is an unexpected-equals-sign-before-attribute-name p1081 parse error p1077. Start a new attribute in the current tag token. Set
// that attribute's name to the current input character p1088, and its value to the empty string. Switch to the attribute name
// state p1104.
// ↪ Anything else
// Start a new attribute in the current tag token. Set that attribute name and value to the empty string. Reconsume p1093 in the
// attribute name state p1104.
export class BeforeAttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
