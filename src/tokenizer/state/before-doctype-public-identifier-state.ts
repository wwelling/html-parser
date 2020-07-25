import { AbstractState } from "./abstract-state";

// 12.2.5.58 Before DOCTYPE public identifier state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+0022 QUOTATION MARK (")
// Set the DOCTYPE token's public identifier to the empty string (not missing), then switch to the DOCTYPE public identifier
// (double-quoted) state p1113.
// ↪ U+0027 APOSTROPHE (')
// Set the DOCTYPE token's public identifier to the empty string (not missing), then switch to the DOCTYPE public identifier (singlequoted) state p1114.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-doctype-public-identifier p1078 parse errorp1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Switch to
// the data state p1094. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flagp1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-public-identifier p1079 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to
// on. Reconsume p1093 in the bogus DOCTYPE state p1117.
export class BeforeDOCTYPEPublicIdentifierState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
