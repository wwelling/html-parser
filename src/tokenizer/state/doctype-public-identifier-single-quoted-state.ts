import { AbstractState } from "./abstract-state";

// 12.2.5.60 DOCTYPE public identifier (single-quoted) state
// Consume the next input character p1088:
// ↪ U+0027 APOSTROPHE (')
// Switch to the after DOCTYPE public identifier state p1114.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// DOCTYPE token's public identifier.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-doctype-public-identifier p1077 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Switch to
// the data state p1094. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the current DOCTYPE token's public identifier.
export class DOCTYPEPublicIdentifierSingleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
