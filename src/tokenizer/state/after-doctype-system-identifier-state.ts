import { AbstractState } from "./abstract-state";
import { Characters } from "../characters";

// 12.2.5.67 After DOCTYPE system identifier state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is an unexpected-character-after-doctype-system-identifier parse error.
// Reconsume in the bogus DOCTYPE state.
// (This does not set the DOCTYPE token's force-quirks flag to on.)
export class AfterDOCTYPESystemIdentifierState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        // ignore the character
        break;
      case Characters.GreaterThanSign:
        this.switchState(this.dataState);
        this.emitDOCTYPEToken();
        break;
      case null:
        console.warn('eof-in-doctype parse error');
        this.doctypeToken.forceQuirks = 'on';
        this.emitDOCTYPEToken();
        this.emitEndOfFileToken();
        break;
      default:
        console.warn('unexpected-character-after-doctype-system-identifier parse error');
        this.reconsumeInState(character, this.bogusDOCTYPEState);
        break;
    }
  }
}
