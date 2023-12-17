import { AbstractState } from "./abstract-state";

// 12.2.5.19 Script data escape start dash state
// Consume the next input character:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data escaped dash dash state. Emit a U+002D HYPHEN-MINUS character token.
// ↪ Anything else
// Reconsume in the script data state.
export class ScriptDataEscapeStartDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
