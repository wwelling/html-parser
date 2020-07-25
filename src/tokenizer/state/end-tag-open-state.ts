import { AbstractState } from "./abstract-state";

// 12.2.5.7 End tag open state
// Consume the next input character p1088:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsumep1093 in the tag name state p1096.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-end-tag-name p1079 parse error p1077. Switch to the data state p1094.
// ↪ EOF
// This is an eof-before-tag-name p1077 parse error p1077. Emit a U+003C LESS-THAN SIGN character token, a U+002F SOLIDUS
// character token and an end-of-file token.
// ↪ Anything else
// This is an invalid-first-character-of-tag-name p1078 parse error p1077. Create a comment token whose data is the empty string.
// Reconsumep1093 in the bogus comment state p1107.
export class EndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
