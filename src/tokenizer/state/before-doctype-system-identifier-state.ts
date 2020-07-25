import { AbstractState } from "./abstract-state";

// 12.2.5.64 Before DOCTYPE system identifier state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+0022 QUOTATION MARK (")
// Set the DOCTYPE token's system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier
// (double-quoted) state.
// ↪ U+0027 APOSTROPHE (')
// Set the DOCTYPE token's system identifier to the empty string (not missing), then switch to the DOCTYPE system identifier
// (single-quoted) state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-doctype-system-identifier parse error. Set the DOCTYPE token's force-quirks flag to on. Switch to
// the data state. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-system-identifier parse error. Set the DOCTYPE token's force-quirks flag to
// on. Reconsume in the bogus DOCTYPE state.
export class BeforeDOCTYPESystemIdentifierState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
