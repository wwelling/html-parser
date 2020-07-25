import { AbstractState } from "./abstract-state";

// 12.2.5.61 After DOCTYPE public identifier state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the between DOCTYPE public and system identifiers state p1114.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current DOCTYPE token.
// ↪ U+0022 QUOTATION MARK (")
// This is a missing-whitespace-between-doctype-public-and-system-identifiers p1079 parse error p1077. Set the DOCTYPE token's
// system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier (double-quoted) state p1116.
// ↪ U+0027 APOSTROPHE (')
// This is a missing-whitespace-between-doctype-public-and-system-identifiers p1079 parse error p1077. Set the DOCTYPE token's
// system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier (single-quoted) state p1116.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-system-identifier p1079 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to
// on. Reconsume p1093 in the bogus DOCTYPE state p1117.
export class AfterDOCTYPEPublicIdentifierState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
