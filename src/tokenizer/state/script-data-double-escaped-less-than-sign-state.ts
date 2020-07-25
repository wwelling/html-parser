import { AbstractState } from "./abstract-state";

// 12.2.5.30 Script data double escaped less-than sign state
// Consume the next input character p1088:
// ↪ U+002F SOLIDUS (/)
// Set the temporary buffer p1093 to the empty string. Switch to the script data double escape end state p1103. Emit a U+002F
// SOLIDUS character token.
// ↪ Anything else
// Reconsume p1093 in the script data double escaped state p1102.
export class ScriptDataDoubleEscapedLessThanSignState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
