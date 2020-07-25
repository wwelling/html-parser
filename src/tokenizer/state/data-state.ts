import { ampersand, lessThanSign, nullCharacter } from "../characters";
import { AbstractState } from "./abstract-state";

// 12.2.5.1 Data state
// Consume the next input character p1088:
// ↪ U+0026 AMPERSAND (&)
// Set the return state p1093 to the data state p1094. Switch to the character reference state p1118.
// ↪ U+003C LESS-THAN SIGN (<)
// Switch to the tag open state p1095.
// ↪ U+0000 NULL
// This is an unexpected-null-character p1081 parse error p1077. Emit the current input character p1088 as a character token.
// ↪ EOF
// Emit an end-of-file token.
// ↪ Anything else
// Emit the current input character p1088 as a character token.
export class DataState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case ampersand:
        break;
      case lessThanSign:
        break;
      case nullCharacter: // This is an unexpected-null-character parse error
      default:
        break;
    }
  }
}
