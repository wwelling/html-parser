import { AbstractState } from "./abstract-state";

// 12.2.5.39 After attribute value (quoted) state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// This is a missing-whitespace-between-attributes parse error.
// Reconsume in the before attribute name state.
export class AfterAttributeValueQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
