import { AbstractState } from "./abstract-state";

// 12.2.5.67 After DOCTYPE system identifier state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is an unexpected-character-after-doctype-system-identifier p1080 parse errorp1077.
// Reconsume p1093 in the bogus DOCTYPE
// state p1117. (This does not set the DOCTYPE token's force-quirks flagp1093 to on.)
export class AfterDOCTYPESystemIdentifierState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
