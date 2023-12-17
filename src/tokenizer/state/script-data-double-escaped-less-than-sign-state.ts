import { AbstractState } from "./abstract-state";

// 12.2.5.30 Script data double escaped less-than sign state
// Consume the next input character:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer to the empty string. Switch to the script data double escape end state. Emit a U+002F
// SOLIDUS character token.
// ↪ Anything else
// Reconsume in the script data double escaped state.
export class ScriptDataDoubleEscapedLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
