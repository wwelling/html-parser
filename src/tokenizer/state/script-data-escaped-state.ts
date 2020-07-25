import { AbstractState } from "./abstract-state";

// 12.2.5.20 Script data escaped state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data escaped dash state p1100. Emit a U+002D HYPHEN-MINUS character token.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the script data escaped less-than sign state p1100.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Emit a U+FFFD REPLACEMENT CHARACTER character token.
// ↪ EOF
// This is an eof-in-script-html-comment-like-text p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character p1088 as a character token.
export class ScriptDataEscapedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
