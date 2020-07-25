import { AbstractState } from "./abstract-state";

// 12.2.5.9 RCDATA less-than sign state
// Consume the next input character p1088:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer p1093 to the empty string. Switch to the RCDATA end tag open state p1096.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsumep1093 in the RCDATA state p1094.
export class RCDATALessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
