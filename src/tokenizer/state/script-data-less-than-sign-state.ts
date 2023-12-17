import { AbstractState } from "./abstract-state";

// 12.2.5.15 Script data less-than sign state
// Consume the next input character:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer to the empty string. Switch to the script data end tag open state.
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the script data escape start state. Emit a U+003C LESS-THAN SIGN character token and a U+0021 EXCLAMATION
// MARK character token.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume in the script data state.
export class ScriptDataLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
