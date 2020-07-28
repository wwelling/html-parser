import { Characters, isASCIIAlpha } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.6 Tag open state
// Consume the next input character:
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the markup declaration open state.
// ↪ U+002F SOLIDUS (/)
// Switch to the end tag open state.
// ↪ ASCII alpha
// Create a new start tag token, set its tag name to the empty string. Reconsume in the tag name state.
// ↪ U+003F QUESTION MARK (?)
// This is an unexpected-question-mark-instead-of-tag-name parse error. Create a comment token whose data is the
// empty string. Reconsume in the bogus comment state.
// ↪ EOF
// This is an eof-before-tag-name parse error. Emit a U+003C LESS-THAN SIGN character token and an end-of-file token.
// ↪ Anything else
// This is an invalid-first-character-of-tag-name parse error. Emit a U+003C LESS-THAN SIGN character token.
// Reconsume in the data state.
export class TagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.ExclamationMark:
        this.switchState(this.markupDeclarationOpenState);
        break;
      case Characters.Solidus:
        this.switchState(this.endTagOpenState);
        break;
      case Characters.QuestionMark:
        console.warn('unexpected-question-mark-instead-of-tag-name parse error');
        this.createCommentToken();
        this.reconsumeInState(character, this.bogusCommentState);
        break;
      case null:
        console.warn('eof-before-tag-name parse error');
        this.emitCharacterToken({ data: Characters.LessThanSign });
        this.emitEndOfFileToken();
        break;
      default:
        if (isASCIIAlpha(character)) {
          this.createStartTagToken();
          this.reconsumeInState(character, this.tagNameState);
        } else {
          console.warn('invalid-first-character-of-tag-name');
          this.emitCharacterToken({ data: Characters.LessThanSign });
          this.reconsumeInState(character, this.dataState);
        }
        break;
    }
  }
}
