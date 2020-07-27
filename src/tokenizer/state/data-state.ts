import { Characters } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.1 Data state
// Consume the next input character:
// ↪ U+0026 AMPERSAND (&)
// Set the return state to the data state. Switch to the character reference state.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the tag open state.
// ↪ U+0000 NULL
// This is an unexpected-null-character parse error. Emit the current input character as a character token.
// ↪ EOF
// Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character as a character token.
export class DataState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case Characters.Ampersand:
        this.setReturnState(this.dataState);
        this.switchState(this.characterReferenceState);
        break;
      case Characters.LessThanSign:
        this.switchState(this.tagOpenState);
        break;
      case null:
        this.emitEndOfFileToken();
        break;
      case Characters.NullCharacter:
        console.warn('unexpected-null-character parse error');
        this.emitCharacterToken({ data: character });
        break;
      default:
        this.emitCharacterToken({ data: character });
        break;
    }
  }
}
