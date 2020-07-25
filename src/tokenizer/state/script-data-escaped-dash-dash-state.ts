import { AbstractState } from "./abstract-state";

// 12.2.5.22 Script data escaped dash dash state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Emit a U+002D HYPHEN-MINUS character token.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the script data escaped less-than sign state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the script data state. Emit a U+003E GREATER-THAN SIGN character token.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Switch to the script data escaped state. Emit a U+FFFD
// REPLACEMENT CHARACTER character token.
// ↪ EOF
// This is an eof-in-script-html-comment-like-text parse error. Emit an end-of-file token.
// ↪ Anything else
// Switch to the script data escaped state. Emit the current input character as a character token
export class ScriptDataEscapedDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
