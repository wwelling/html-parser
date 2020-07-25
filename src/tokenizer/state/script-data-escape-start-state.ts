import { AbstractState } from "./abstract-state";

// 12.2.5.18 Script data escape start state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data escape start dash state. Emit a U+002D HYPHEN-MINUS character token.
// ↪ Anything else
// Reconsume in the script data state.
export class ScriptDataEscapeStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
