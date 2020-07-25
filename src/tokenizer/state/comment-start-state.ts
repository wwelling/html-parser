import { AbstractState } from "./abstract-state";

// 12.2.5.43 Comment start state
// Consume the next input character p1088:
// ↪ U+002D HYPHEN-MINUS (-)
// Switch to the comment start dash state p1108.
// ↪ U+003E GREATER-THAN SIGN (>)
// This is an abrupt-closing-of-empty-comment p1077 parse error p1077. Switch to the data state p1094. Emit the comment token.
// ↪ Anything else
// Reconsume p1093 in the comment state p1109.
export class CommentStartState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
