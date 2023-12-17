import { AbstractState } from "./abstract-state";

// 12.2.5.9 RCDATA less-than sign state
// Consume the next input character:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer to the empty string. Switch to the RCDATA end tag open state.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume in the RCDATA state.
export class RCDATALessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
