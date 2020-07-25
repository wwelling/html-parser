import { AbstractState } from "./abstract-state";

// 12.2.5.11 RCDATA end tag name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// If the current end tag token is an appropriate end tag token, then switch to the before attribute name state. Otherwise,
// treat it as per the "anything else" entry below.
// ↪ U+002F SOLIDUS (/)
// If the current end tag token is an appropriate end tag token, then switch to the self-closing start tag state. Otherwise,
// treat it as per the "anything else" entry below.
// ↪ U+003E GREATER-THAN SIGN (>)
// If the current end tag token is an appropriate end tag token, then switch to the data state and emit the current tag
// token. Otherwise, treat it as per the "anything else" entry below.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character (add 0x0020 to the character's code point) to the current tag
// token's tag name. Append the current input character to the temporary buffer.
// ↪ ASCII lower alpha
// Append the current input character to the current tag token's tag name. Append the current input character to the
// temporary buffer.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token, a U+002F SOLIDUS character token, and a character token for each of the
// characters in the temporary buffer (in the order they were added to the buffer). Reconsume in the RCDATA state.
export class RCDATAEndTagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
