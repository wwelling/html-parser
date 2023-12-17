import { AbstractState } from "./abstract-state";

// 12.2.5.23 Script data escaped less-than sign state
// Consume the next input character:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer to the empty string. Switch to the script data escaped end tag open state.
// ↪ ASCII alpha
// Set the temporary buffer to the empty string. Emit a U+003C LESS-THAN SIGN character token. Reconsume in the
// script data double escape start state.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume in the script data escaped state.
export class ScriptDataEscapedLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
