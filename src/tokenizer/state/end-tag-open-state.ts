import { AbstractState } from "./abstract-state";
import { isASCIIAlpha, Characters } from "../characters";

// 12.2.5.7 End tag open state
// Consume the next input character:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsume in the tag name state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-end-tag-name parse error. Switch to the data state.
// ↪ EOF
// This is an eof-before-tag-name parse error. Emit a U+003C LESS-THAN SIGN character token, a U+002F SOLIDUS
// character token and an end-of-file token.
// ↪ Anything else
// This is an invalid-first-character-of-tag-name parse error. Create a comment token whose data is the empty string.
// Reconsume in the bogus comment state.
export class EndTagOpenState extends AbstractState {
  consume(character: string): void {
    if (isASCIIAlpha(character)) {
      this.createEndTagToken();
      this.reconsumeInState(character, this.tagNameState);
    } else if (character === Characters.GreaterThanSign) {
      console.warn('missing-end-tag-name parse parse error');
      this.switchState(this.dataState);
    } else if (character === null) {
      console.warn('eof-before-tag-name parse error');
      this.emitCharacterToken({ data: Characters.LessThanSign });
      this.emitCharacterToken({ data: Characters.Solidus });
      this.emitEndOfFileToken();
    } else {
      console.warn('invalid-first-character-of-tag-name parse error');
      this.createCommentToken();
      this.reconsumeInState(character, this.bogusCommentState);
    }
  }
}
