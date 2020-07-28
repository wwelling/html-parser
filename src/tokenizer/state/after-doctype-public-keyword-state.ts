import { Characters } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.57 After DOCTYPE public keyword state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before DOCTYPE public identifier state.
// ↪ U+0022 QUOTATION MARK (")
// This is a missing-whitespace-after-doctype-public-keyword
// parse error. Set the DOCTYPE token's public identifier to the
// empty string (not missing), then switch to the DOCTYPE public identifier (double-quoted) state.
// ↪ U+0027 APOSTROPHE (')
// This is a missing-whitespace-after-doctype-public-keyword
// parse error. Set the DOCTYPE token's public identifier to the
// empty string (not missing), then switch to the DOCTYPE public identifier (single-quoted) state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-doctype-public-identifier parse error. Set the DOCTYPE token's force-quirks flag to on. Switch to
// the data state. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-public-identifier parse error. Set the DOCTYPE token's force-quirks flag to
// on. Reconsume in the bogus DOCTYPE state.
export class AfterDOCTYPEPublicKeywordState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        this.switchState(this.beforeDOCTYPEPublicIdentifierState);
        break;
      case Characters.QuotationMark:
        console.warn('missing-whitespace-after-doctype-public-keyword parse error');
        this.doctypeToken.publicIdentifier = '';
        this.switchState(this.doctypePublicIdentifierDoubleQuotedState);
        break;
      case Characters.Apostrophe:
        console.warn('missing-whitespace-after-doctype-public-keyword parse error');
        this.doctypeToken.publicIdentifier = '';
        this.switchState(this.doctypePublicIdentifierSingleQuotedState);
        break;
      case Characters.GreaterThanSign:
        console.warn('missing-doctype-public-identifier error');
        this.doctypeToken.forceQuirks = 'on';
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
        console.warn('missing-quote-before-doctype-public-identifier parse error');
        this.doctypeToken.forceQuirks = 'on';
        this.reconsumeInState(character, this.bogusDOCTYPEState);
        break;
    }
  }
}
