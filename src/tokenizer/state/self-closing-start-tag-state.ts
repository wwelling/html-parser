import { AbstractState } from "./abstract-state";

// 12.2.5.40 Self-closing start tag state
// Consume the next input character p1088:
// ↪ U+003E GREATER-THAN SIGN (>)
// Set the self-closing flag p1093 of the current tag token. Switch to the data state p1094. Emit the current tag token.
// ↪ EOF
// This is an eof-in-tagp1078 parse errorp1077. Emit an end-of-file token.
// ↪ Anything else
// This is an unexpected-solidus-in-tag p1081 parse error p1077.
// Reconsume p1093 in the before attribute name state p1104.
export class SelfClosingStartTagState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
