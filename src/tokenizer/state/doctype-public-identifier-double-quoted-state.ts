import { AbstractState } from "./abstract-state";

// 12.2.5.59 DOCTYPE public identifier (double-quoted) state
// Consume the next input character:
// ↪ U+0022 QUOTATION MARK (")
// Switch to the after DOCTYPE public identifier state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// DOCTYPE token's public identifier.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-doctype-public-identifier parse error. Set the DOCTYPE token's force-quirks flag to on. Switch to
// the data state. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current DOCTYPE token's public identifier.
export class DOCTYPEPublicIdentifierDoubleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
