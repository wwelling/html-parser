import { AbstractState } from "./abstract-state";

// 12.2.5.22 Script data escaped dash dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Emit a U+002D HYPHEN-MINUS character token.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the script data escaped less-than sign state p1100.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the script data state p1094. Emit a U+003E GREATER-THAN SIGN character token.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Switch to the script data escaped state p1099. Emit a U+FFFD
// REPLACEMENT CHARACTER character token.
// ↪ EOF
// This is an eof-in-script-html-comment-like-textp1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Switch to the script data escaped state p1099. Emit the current input character p1088 as a character token
export class ScriptDataEscapedDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
