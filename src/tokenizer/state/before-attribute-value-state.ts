import { Characters } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.35 Before attribute value state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+0022 QUOTATION MARK (")
// Switch to the attribute value (double-quoted) state.
// ↪ U+0027 APOSTROPHE (')
// Switch to the attribute value (single-quoted) state.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is a missing-attribute-value parse error. Switch to the data state. Emit the current tag token.
// ↪ Anything else
// Reconsume in the attribute value (unquoted) state.
export class BeforeAttributeValueState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        // ignore the character
        break;
      case Characters.QuotationMark:
        this.switchState(this.attributeValueDoubleQuotedState);
        break;
      case Characters.Apostrophe:
        this.switchState(this.attributeValueSingleQuotedState);
        break;
      case Characters.GreaterThanSign:
        console.warn('missing-attribute-value parse error');
        this.switchState(this.dataState);
        this.emitCurrentTagToken();
        break;
      default:
        this.reconsumeInState(character, this.attributeValueUnquotedState);
        break;
    }
  }
}
