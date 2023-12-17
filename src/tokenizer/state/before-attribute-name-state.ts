import { Characters } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.32 Before attribute name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+002F SOLIDUS (/)
// ↪ U+003E GREATER-THAN SIGN (>)
// ↪ EOF
// Reconsume in the after attribute name state.
// ↪ U+003D EQUALS SIGN (=)
// This is an unexpected-equals-sign-before-attribute-name parse error. Start a new attribute in the current tag token. Set
// that attribute's name to the current input character, and its value to the empty string. Switch to the attribute name
// state.
// ↪ Anything else
// Start a new attribute in the current tag token. Set that attribute name and value to the empty string. Reconsume in the
// attribute name state.
export class BeforeAttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        // ignore the character
        break;
      case Characters.Solidus:
      case Characters.GreaterThanSign:
      case null:
        this.reconsumeInState(character, this.afterAttributeNameState);
        break;
      case Characters.EqualsSign:
        console.warn('unexpected-equals-sign-before-attribute-name parse error');
        this.startNewTagAttribute(character);
        this.switchState(this.attributeNameState);
        break;
      default:
        this.startNewTagAttribute();
        this.reconsumeInState(character, this.attributeNameState);
        break;
    }
  }
}
