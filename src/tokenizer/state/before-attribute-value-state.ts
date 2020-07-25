import { AbstractState } from "./abstract-state";

// 12.2.5.35 Before attribute value state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+0022 QUOTATION MARK (")
// Switch to the attribute value (double-quoted) state p1105.
// ↪ U+0027 APOSTROPHE (')
// Switch to the attribute value (single-quoted) state p1106.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-attribute-value p1078 parse error p1077. Switch to the data state p1094. Emit the current tag token.
// ↪ Anything else
// Reconsume p1093 in the attribute value (unquoted) state p1106.
export class BeforeAttributeValueState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
