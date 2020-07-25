import { AbstractState } from "./abstract-state";

// 12.2.5.19 Script data escape start dash state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the script data escaped dash dash state p1100. Emit a U+002D HYPHEN-MINUS character token.
// ↪ Anything else
// Reconsumep1093 in the script data state p1094.
export class ScriptDataEscapeStartDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
