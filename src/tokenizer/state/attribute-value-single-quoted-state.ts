import { AbstractState } from "./abstract-state";
import { Characters } from "../characters";

// 12.2.5.37 Attribute value (single-quoted) state
// Consume the next input character:
// ↪ U+0027 APOSTROPHE (')
// Switch to the after attribute value (quoted) state.
// ↪ U+0026 AMPERSAND (&)
// Set the return state to the attribute value (single-quoted) state. Switch to the character reference state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Append a U+FFFD REPLACEMENT CHARACTER character to the current
// attribute's value.
// ↪ EOF
// This is an eof-in-tag parse error. Emit an end-of-file token.
// ↪ Anything else
// Append the current input character to the current attribute's value.
export class AttributeValueSingleQuotedState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.Apostrophe:
        this.switchState(this.afterAttributeValueQuotedState);
        break;
      case Characters.Ampersand:
        this.setReturnState(this.attributeValueSingleQuotedState);
        this.switchState(this.characterReferenceState);
        break;
      case Characters.NullCharacter:
        console.warn('unexpected-null-character parse error');
        this.currentTagAttribute.value += Characters.ReplacementCharacter;
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
