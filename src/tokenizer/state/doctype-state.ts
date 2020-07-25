import { AbstractState } from "./abstract-state";

// 12.2.5.53 DOCTYPE state
// Consume the next input character p1088:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before DOCTYPE name state p1111.
// ↪ U+003E GREATER-THAN SIGN (>)
// Reconsumep1093 in the before DOCTYPE name state p1111.
// ↪ EOF
// This is an eof-in-doctype p1078 parse error p1077. Create a new DOCTYPE token. Set its force-quirks flag p1093 to on. Emit the token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-whitespace-before-doctype-name p1079 parse error p1077.
// Reconsume p1093 in the before DOCTYPE name state p1111.
export class DOCTYPEState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
