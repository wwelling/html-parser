import { AbstractState } from "./abstract-state";

// 12.2.5.16 Script data end tag open state
// Consume the next input character p1088:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsume p1093 in the script data end tag name state p1098.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token and a U+002F SOLIDUS character token. Reconsumep1093 in the script data
// state p1094.
export class ScriptDataEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
