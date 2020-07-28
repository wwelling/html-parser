import { AbstractState } from "./abstract-state";
import { Characters } from "../characters";

// 12.2.5.63 After DOCTYPE system keyword state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before DOCTYPE system identifier state.
// ↪ U+0022 QUOTATION MARK (")
// This is a missing-whitespace-after-doctype-system-keyword
// parse error. Set the DOCTYPE token's system identifier to
// the empty string (not missing), then switch to the DOCTYPE system identifier (double-quoted) state.
// ↪ U+0027 APOSTROPHE (')
// This is a missing-whitespace-after-doctype-system-keyword
// parse error. Set the DOCTYPE token's system identifier to
// the empty string (not missing), then switch to the DOCTYPE system identifier (single-quoted) state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-doctype-system-identifier parse error. Set the DOCTYPE token's force-quirks flag to on. Switch to
// the data state. Emit that DOCTYPE token.
// ↪ EOF
// This is an eof-in-doctype parse error. Set the DOCTYPE token's force-quirks flag to on. Emit that DOCTYPE token.
// Emit an end-of-file token.
// ↪ Anything else
// This is a missing-quote-before-doctype-system-identifier parse error. Set the DOCTYPE token's force-quirks flag to
// on. Reconsume in the bogus DOCTYPE state.
export class AfterDOCTYPESystemKeywordState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        this.switchState(this.beforeDOCTYPESystemIdentifierState);
        break;
      case Characters.QuotationMark:
        console.warn('missing-whitespace-after-doctype-system-keyword parse error');
        this.doctypeToken.systemIdentifier = '';
        this.switchState(this.doctypeSystemIdentifierDoubleQuotedState);
        break;
      case Characters.Apostrophe:
        console.warn('missing-whitespace-after-doctype-system-keyword parse error');
        this.doctypeToken.systemIdentifier = '';
        this.switchState(this.doctypeSystemIdentifierSingleQuotedState);
        break;
      case Characters.GreaterThanSign:
        console.warn('missing-doctype-system-identifier parse error');
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
        console.warn('missing-quote-before-doctype-system-identifier parse error');
        this.doctypeToken.forceQuirks = 'on';
        this.reconsumeInState(character, this.bogusDOCTYPEState);
        break;
    }
  }
}
