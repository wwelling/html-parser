import { AbstractState } from "./abstract-state";

// 12.2.5.8 Tag name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current tag token.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character (add 0x0020 to the character's code point) to the current tag
// token's tag name.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// tag token's tag name.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current tag token's tag name.
export class TagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
