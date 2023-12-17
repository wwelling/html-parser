import { AbstractState } from "./abstract-state";

// 12.2.5.70 CDATA section bracket state
// Consume the next input character:
// ↪ U+005D RIGHT SQUARE BRACKET (])
// Switch to the CDATA section end state.
// ↪ Anything else
// Emit a U+005D RIGHT SQUARE BRACKET character token. Reconsume in the CDATA section state.
export class CDATASectionBracketState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
