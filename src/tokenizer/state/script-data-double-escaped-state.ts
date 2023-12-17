import { AbstractState } from "./abstract-state";

// 12.2.5.27 Script data double escaped state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data double escaped dash state. Emit a U+002D HYPHEN-MINUS character token.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the script data double escaped less-than sign state. Emit a U+003C LESS-THAN SIGN character token.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Emit a U+FFFD REPLACEMENT CHARACTER character token.
// ↪ EOF
// This is an eof-in-script-html-comment-like-text parse error. Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character as a character token.
export class ScriptDataDoubleEscapedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
