import { AbstractState } from "./abstract-state";
import { Characters, isASCIIAlphanumeric } from "../characters";

// 12.2.5.74 Ambiguous ampersand state
// Consume the next input character:
// ↪ ASCII alphanumeric
// If the character reference was consumed as part of an attribute, then append the current input character to the current
// attribute's value. Otherwise, emit the current input character as a character token.
// ↪ U+003B SEMICOLON (;)
// This is an unknown-named-character-reference parse error. Reconsume in the return state.
// ↪ Anything else
// Reconsume in the return state.
export class AmbiguousAmpersandState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.SemiColon:
        console.warn('unknown-named-character-reference parse error');
        this.reconsumeInReturnState(character);
        break;
      default:
        if (isASCIIAlphanumeric(character)) {
          if (this.isReturnState(
            this.attributeValueSingleQuotedState,
            this.attributeValueDoubleQuotedState,
            this.attributeValueUnquotedState
          )) {
            this.currentTagAttribute.value += character;
          } else {
            this.emitCharacterToken({ data: character });
          }
        } else {
          this.reconsumeInReturnState(character);
        }
        break;
    }
  }
}
