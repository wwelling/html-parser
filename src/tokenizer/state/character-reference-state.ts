import { AbstractState } from "./abstract-state";
import { isASCIIAlphanumeric, Characters } from "../characters";

// 12.2.5.72 Character reference state
// Set the temporary buffer to the empty string. Append a U+0026 AMPERSAND (&) character to the temporary buffer.
// Consume the next input character:
// ↪ ASCII alphanumeric
// Reconsume in the named character reference state.
// ↪ U+0023 NUMBER SIGN (#)
// Append the current input character to the temporary buffer. Switch to the numeric character reference state.
// ↪ Anything else
// Flush code points consumed as a character reference. Reconsume in the return state.
export class CharacterReferenceState extends AbstractState {
  consume(character: string): void {
    this.setTemporaryBuffer('');
    this.appendToTemporaryBuffer(Characters.Ampersand);
    if (isASCIIAlphanumeric(character)) {
      this.reconsume(character, this.states.namedCharacterReferenceState);
    } else if (character === Characters.NumberSign) {
      this.appendToTemporaryBuffer(character);
      this.switchState(this.states.numericCharacterReferenceState);
    } else {
      this.flushCodePoints();
      this.reconsumeInReturnState(character);
    }
  }
}
