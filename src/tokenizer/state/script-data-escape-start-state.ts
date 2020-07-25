import { AbstractState } from "./abstract-state";

// 12.2.5.18 Script data escape start state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data escape start dash state p1099. Emit a U+002D HYPHEN-MINUS character token.
// ↪ Anything else
// Reconsumep1093 in the script data state p1094.
export class ScriptDataEscapeStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
