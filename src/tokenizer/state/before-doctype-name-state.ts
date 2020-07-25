import { AbstractState } from "./abstract-state";

// 12.2.5.54 Before DOCTYPE name state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ ASCII upper alpha
// Create a new DOCTYPE token. Set the token's name to the lowercase version of the current input character p1088 (add 0x0020 to
// the character's code point). Switch to the DOCTYPE name state p1111.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Create a new DOCTYPE token. Set the token's name to a U+FFFD
// REPLACEMENT CHARACTER character. Switch to the DOCTYPE name state p1111.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-doctype-name p1078 parse error p1077. Create a new DOCTYPE token. Set its force-quirks flag p1093 to on. Switch to
// the data state p1094. Emit the token.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Create a new DOCTYPE token. Set its force-quirks flag p1093 to on. Emit the token.
// Emit an end-of-file token.
// ↪ Anything else
// Create a new DOCTYPE token. Set the token's name to the current input character p1088. Switch to the DOCTYPE name state p1111.
export class BeforeDOCTYPENameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
