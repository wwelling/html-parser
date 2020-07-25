import { AbstractState } from "./abstract-state";

// 12.2.5.34 After attribute name state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state p1107.
// ↪ U+003D EQUALS SIGN (=)
// Switch to the before attribute value state p1105.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tag p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Start a new attribute in the current tag token. Set that attribute name and value to the empty string. Reconsume p1093 in the
// attribute name state p1104.
export class AfterAttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
