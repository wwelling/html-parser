import { AbstractState } from "./abstract-state";

// 12.2.5.23 Script data escaped less-than sign state
// Consume the next input character p1088:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer p1093 to the empty string. Switch to the script data escaped end tag open state p1101.
// ↪ ASCII alpha
// Set the temporary buffer p1093 to the empty string. Emit a U+003C LESS-THAN SIGN character token. Reconsume p1093 in the
// script data double escape start state p1101.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token. Reconsume p1093 in the script data escaped state p1099.
export class ScriptDataEscapedLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
