import { AbstractState } from "./abstract-state";

// 12.2.5.10 RCDATA end tag open state
// Consume the next input character:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsume in the RCDATA end tag name state.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token and a U+002F SOLIDUS character token. Reconsume in the RCDATA
// state.
export class RCDATAEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
