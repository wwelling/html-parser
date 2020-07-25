import { AbstractState } from "./abstract-state";

// 12.2.5.62 Between DOCTYPE public and system identifiers state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current DOCTYPE token.
// ↪ U+0022 QUOTATION MARK (")
// Set the DOCTYPE token's system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier
// (double-quoted) state p1116.
// ↪ U+0027 APOSTROPHE (')
// Set the DOCTYPE token's system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier
// (single-quoted) state p1116.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-system-identifier p1079 parse errorp1077. Set the DOCTYPE token's force-quirks flag p1093 to
// on. Reconsumep1093 in the bogus DOCTYPE state p1117.
export class BetweenDOCTYPEPublicAndSystemIdentifiersState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
