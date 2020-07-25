import { AbstractState } from "./abstract-state";

// 12.2.5.12 RAWTEXT less-than sign state
// Consume the next input character:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer to the empty string. Switch to the RAWTEXT end tag open state.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume in the RAWTEXT state.
export class RAWTEXTLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
