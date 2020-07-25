import { AbstractState } from "./abstract-state";

// 12.2.5.71 CDATA section end state
// Consume the next input character p1088:
// ↪ U+005D RIGHT SQUARE BRACKET (])
// Emit a U+005D RIGHT SQUARE BRACKET character token.
// ↪ U+003E GREATER-THAN SIGN character
// Switch to the data state p1094.
// ↪ Anything else
// Emit two U+005D RIGHT SQUARE BRACKET character tokens. Reconsume p1093 in the CDATA section state p1117.
export class CDATASectionEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
