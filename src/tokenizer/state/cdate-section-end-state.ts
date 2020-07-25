import { AbstractState } from "./abstract-state";

// 12.2.5.71 CDATA section end state
// Consume the next input character:
// ↪ U+005D RIGHT SQUARE BRACKET (])
// Emit a U+005D RIGHT SQUARE BRACKET character token.
// ↪ U+003E GREATER-THAN SIGN character
// Switch to the data state.
// ↪ Anything else
// Emit two U+005D RIGHT SQUARE BRACKET character tokens. Reconsume in the CDATA section state.
export class CDATASectionEndState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
