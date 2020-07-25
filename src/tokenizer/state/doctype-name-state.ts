import { AbstractState } from "./abstract-state";

// 12.2.5.55 DOCTYPE name state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the after DOCTYPE name state p1112.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current DOCTYPE token.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character p1088 (add 0x0020 to the character's code point) to the current
// DOCTYPE token's name.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// DOCTYPE token's name.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Set the DOCTYPE token's force-quirks flag p1093 to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the current DOCTYPE token's name.
export class DOCTYPENameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
