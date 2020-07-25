import { AbstractState } from "./abstract-state";

// 12.2.5.10 RCDATA end tag open state
// Consume the next input character p1088:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsume p1093 in the RCDATA end tag name state p1097.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token and a U+002F SOLIDUS character token. Reconsume p1093 in the RCDATA
// state p1094.
export class RCDATAEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
