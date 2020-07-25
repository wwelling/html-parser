import { AbstractState } from "./abstract-state";

// 12.2.5.8 Tag name state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state p1104.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state p1107.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state p1094. Emit the current tag token.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character p1088 (add 0x0020 to the character's code point) to the current tag
// token's tag name.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// tag token's tag name.
// ↪ EOF
// This is an eof-in-tag p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character p1088 to the current tag token's tag name.
export class TagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
