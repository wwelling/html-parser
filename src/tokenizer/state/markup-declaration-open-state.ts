import { AbstractState } from "./abstract-state";

// 12.2.5.42 Markup declaration open state
// If the next few characters are:
// ↪ Two U+002D HYPHEN-MINUS characters (-)
// Consume those two characters, create a comment token whose data is the empty string, and switch to the comment start
// state.
// ↪ ASCII case-insensitive match for the word "DOCTYPE"
// Consume those characters and switch to the DOCTYPE state.
// ↪ The string "[CDATA[" (the five uppercase letters "CDATA" with a U+005B LEFT SQUARE BRACKET character before
// and after)
// Consume those characters. If there is an adjusted current node and it is not an element in the HTML namespace, then
// switch to the CDATA section state. Otherwise, this is a cdata-in-html-content parse error. Create a comment token
// whose data is the "[CDATA[" string. Switch to the bogus comment state.
// ↪ Anything else
// This is an incorrectly-opened-comment parse error. Create a comment token whose data is the empty string. Switch to
// the bogus comment state (don't consume anything in the current state).
export class MarkupDeclarationOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
