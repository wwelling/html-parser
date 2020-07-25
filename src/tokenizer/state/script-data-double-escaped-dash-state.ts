import { AbstractState } from "./abstract-state";

// 12.2.5.28 Script data double escaped dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data double escaped dash dash state p1103. Emit a U+002D HYPHEN-MINUS character token.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the script data double escaped less-than sign state p1103. Emit a U+003C LESS-THAN SIGN character token.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Switch to the script data double escaped state p1102. Emit a U+FFFD
// REPLACEMENT CHARACTER character token.
// ↪ EOF
// This is an eof-in-script-html-comment-like-text p1078 parse error p1077. Emit an end-of-file token.
// ↪ Anything else
// Switch to the script data double escaped state p1102. Emit the current input character p1088 as a character token.
export class ScriptDataDoubleEscapedDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
