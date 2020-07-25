import { AbstractState } from "./abstract-state";

// 12.2.5.24 Script data escaped end tag open state
// Consume the next input character:
// ↪ ASCII alpha
// Create a new end tag token, set its tag name to the empty string. Reconsume in the script data escaped end tag name
// statep1101.
// ↪ Anything else
// Emit a U+003C LESS-THAN SIGN character token and a U+002F SOLIDUS character token. Reconsume in the script data
// escaped state.
export class ScriptDataEscapedEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
