import { Characters } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.34 After attribute name state
// Consume the next input character:
// ↪ U+0009 CHARACTER TABULATION (tab)
// ↪ U+000A LINE FEED (LF)
// ↪ U+000C FORM FEED (FF)
// ↪ U+0020 SPACE
// Ignore the character.
// ↪ U+002F SOLIDUS (/)
// Switch to the self-closing start tag state.
// ↪ U+003D EQUALS SIGN (=)
// Switch to the before attribute value state.
// ↪ U+003E GREATER-THAN SIGN (>)
// Switch to the data state. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// Start a new attribute in the current tag token. Set that attribute name and value to the empty string.
// Reconsume in the attribute name state.
export class AfterAttributeNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.CharacterTabulation:
      case Characters.LineFeed:
      case Characters.FormFeed:
      case Characters.Space:
        // ignore the character
        break;
      case Characters.Solidus:
        this.switchState(this.selfClosingStartTagState);
        break;
      case Characters.EqualsSign:
        this.switchState(this.beforeAttributeValueState);
        break;
      case Characters.GreaterThanSign:
        this.switchState(this.dataState);
        this.emitCurrentTagToken();
        break;
      case null:
        console.warn('eof-in-tag parse error');
        this.emitEndOfFileToken();
        break;
      default:
        this.startNewTagAttribute();
        this.reconsumeInState(character, this.attributeNameState);
        break;
    }
  }
}
