import { AbstractState } from "./abstract-state";

// 12.2.5.12 RAWTEXT less-than sign state
// Consume the next input character p1088:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer p1093 to the empty string. Switch to the RAWTEXT end tag open state p1097.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsumep1093 in the RAWTEXT state p1094.
export class RAWTEXTLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
