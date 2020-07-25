import { AbstractState } from "./abstract-state";

// 12.2.5.6 Tag open state
// Consume the next input character p1088:
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the markup declaration open state p1108.
// ↪ U+002F SOLIDUS (/)
// Switch to the end tag open state p1095.
// ↪ ASCII alpha
// Create a new start tag token, set its tag name to the empty string. Reconsumep1093 in the tag name state p1096.
// ↪ U+003F QUESTION MARK (?)
// This is an unexpected-question-mark-instead-of-tag-name p1081 parse errorp1077. Create a comment token whose data is the
// empty string. Reconsumep1093 in the bogus comment state p1107.
// ↪ EOF
// This is an eof-before-tag-name p1077 parse error p1077. Emit a U+003C LESS-THAN SIGN character token and an end-of-file token.
// ↪ Anything else
// This is an invalid-first-character-of-tag-name p1078 parse error p1077. Emit a U+003C LESS-THAN SIGN character token.
// Reconsumep1093 in the data state p1094.
export class TagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
