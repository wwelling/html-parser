import { AbstractState } from "./abstract-state";

// 12.2.5.70 CDATA section bracket state
// Consume the next input character p1088:
// ↪ U+005D RIGHT SQUARE BRACKET (])
// Switch to the CDATA section end state p1118.
// ↪ Anything else
// Emit a U+005D RIGHT SQUARE BRACKET character token. Reconsume p1093 in the CDATA section state p1117.
export class CDATASectionBracketState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
