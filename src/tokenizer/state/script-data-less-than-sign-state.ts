import { AbstractState } from "./abstract-state";

// 12.2.5.15 Script data less-than sign state
// Consume the next input character p1088:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer p1093 to the empty string. Switch to the script data end tag open state p1098.
// ↪ U+0021 EXCLAMATION MARK (!)
// Switch to the script data escape start state p1099. Emit a U+003C LESS-THAN SIGN character token and a U+0021 EXCLAMATION
// MARK character token.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume p1093 in the script data state p1094.
export class ScriptDataLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
