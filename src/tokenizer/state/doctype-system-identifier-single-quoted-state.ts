import { AbstractState } from "./abstract-state";

// 12.2.5.66 DOCTYPE system identifier (single-quoted) state
// Consume the next input character:
// ↪ U+0027 APOSTROPHE (')
// Switch to the after DOCTYPE system identifier state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// DOCTYPE token's system identifier.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-doctype-system-identifier parse error. Set the DOCTYPE token's force-quirks flag to on. Switch to
// the data state. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current DOCTYPE token's system identifier.
export class DOCTYPESystemIdentifierSingleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
