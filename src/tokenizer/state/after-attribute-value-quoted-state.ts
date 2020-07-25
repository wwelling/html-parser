import { AbstractState } from "./abstract-state";

// 12.2.5.39 After attribute value (quoted) state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state p1104.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state p1107.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tagp1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// This is a missing-whitespace-between-attributes p1079 parse error p1077.
// Reconsume p1093 in the before attribute name state p1104.
export class AfterAttributeValueQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
