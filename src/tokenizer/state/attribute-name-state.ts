import { Characters, isASCIIUpperAlpha } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.33 Attribute name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// ↪ U+002F SOLIDUS (/)
// ↪ U+003E GREATER-THAN SIGN (>)
// ↪ EOF
// Reconsume in the after attribute name state.
// ↪ U+003D EQUALS SIGN (=)
// Switch to the before attribute value state.
// ↪ ASCII upper alpha
// Append the lowercase version of the current input character (add 0x0020 to the character's code point) to the current
// attribute's name.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's name.
// ↪ U+0022 QUOTATION MARK (")
// ↪ U+0027 APOSTROPHE (')
// ↪ U+003C LESS-THAN SIGN (<)
// This is an unexpected-character-in-attribute-name parse error. Treat it as per the "anything else" entry below.
// ↪ Anything else
// Append the current input character to the current attribute's name.
// When the user agent leaves the attribute name state (and before emitting the tag token, if appropriate), the complete attribute's name
// must be compared to the other attributes on the same token; if there is already an attribute on the token with the exact same name,
// then this is a duplicate-attribute parse error and the new attribute must be removed from the token.

// NOTE: If an attribute is so removed from a token, it, and the value that gets associated with it, if any, are never subsequently used by the
// parser, and are therefore effectively discarded. Removing the attribute in this way does not change its status as the "current
// attribute" for the purposes of the tokenizer, however
export class AttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
      case Characters.Solidus:
      case Characters.GreaterThanSign:
      case null:
        this.reconsumeInState(character, this.afterAttributeNameState);
        break;
      case Characters.EqualsSign:
        this.switchState(this.beforeAttributeValueState);
        break;
      case Characters.NullCharacter:
        console.warn('unexpected-null-character parse error');
        this.currentTagAttribute.name += Characters.ReplacementCharacter;
        break;
      case Characters.QuotationMark:
      case Characters.Apostrophe:
      case Characters.LessThanSign:
        console.warn('unexpected-character-in-attribute-name parse error');
        this.currentTagAttribute.name += character;
        break;
      default:
        if (isASCIIUpperAlpha(character)) {
          this.currentTagAttribute.name += character.toLowerCase();
        } else {
          console.warn('unexpected-character-in-attribute-name parse error');
          this.currentTagAttribute.name += character;
        }
        break;
    }
  }
}
