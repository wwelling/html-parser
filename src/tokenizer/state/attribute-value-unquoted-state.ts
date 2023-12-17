import { AbstractState } from "./abstract-state";
import { Characters } from "../characters";

// 12.2.5.38 Attribute value (unquoted) state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Switch to the before attribute name state.
// ↪ U+0026 AMPERSAND (&)
// Set the return state to the attribute value (unquoted) state. Switch to the character reference state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current tag token.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's value.
// ↪ U+0022 QUOTATION MARK (")
// ↪ U+0027 APOSTROPHE (')
// ↪ U+003C LESS-THAN SIGN (<)
// ↪ U+003D EQUALS SIGN (=)
// ↪ U+0060 GRAVE ACCENT (`)
// This is an unexpected-character-in-unquoted-attribute-value parse error. Treat it as per the "anything else" entry below.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current attribute's value.
export class AttributeValueUnquotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        this.switchState(this.beforeAttributeNameState);
        break;
      case Characters.Ampersand:
        this.setReturnState(this.attributeValueUnquotedState);
        this.switchState(this.characterReferenceState);
        break;
      case Characters.GreaterThanSign:
        this.switchState(this.dataState);
        this.emitCurrentTagToken();
        break;
      case Characters.NullCharacter:
        console.warn('unexpected-null-character parse error');
        this.currentTagAttribute.value += Characters.ReplacementCharacter;
        break;
      case Characters.QuotationMark:
      case Characters.Apostrophe:
      case Characters.LessThanSign:
      case Characters.EqualsSign:
      case Characters.GraveAccent:
        console.warn('unexpected-character-in-unquoted-attribute-value parse error');
        this.currentTagAttribute.value += character;
        break;
      case null:
        console.warn('eof-in-tag parse error');
        this.emitEndOfFileToken();
        break;
      default:
        this.currentTagAttribute.value += character;
        break;
    }
  }
}
