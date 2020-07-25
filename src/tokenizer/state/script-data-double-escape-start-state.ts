import { AbstractState } from "./abstract-state";

// 12.2.5.26 Script data double escape start state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// ↪ U+002F SOLIDUS (/)
// ↪ U+003E GREATER-THAN SIGN (>)
// If the temporary buffer p1093 is the string "script", then switch to the script data double escaped state p1102. Otherwise, switch to
// the script data escaped state p1099. Emit the current input character p1088 as a character token.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character p1088 (add 0x0020 to the character's code point) to the temporary
// buffer p1093. Emit the current input character p1088 as a character token.
// ↪ ASCII lower alpha
// Append the current input character p1088 to the temporary buffer p1093. Emit the current input character p1088 as a character token.
// ↪ Anything else
// Reconsume p1093 in the script data escaped state p1099.
export class ScriptDataDoubleEscapeStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
