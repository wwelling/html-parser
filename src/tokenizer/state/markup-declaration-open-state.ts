import { AbstractState } from "./abstract-state";

// 12.2.5.42 Markup declaration open state
// If the next few characters are:
// ↪ Two U+002D HYPHEN-MINUS characters (-)
// Consume those two characters, create a comment token whose data is the empty string, and switch to the comment start
// statep1108.
// ↪ ASCII case-insensitive match for the word "DOCTYPE"
// Consume those characters and switch to the DOCTYPE state p1111.
// ↪ The string "[CDATA[" (the five uppercase letters "CDATA" with a U+005B LEFT SQUARE BRACKET character before
// and after)
// Consume those characters. If there is an adjusted current nodep1090 and it is not an element in the HTML namespace, then
// switch to the CDATA section state p1117. Otherwise, this is a cdata-in-html-content p1077 parse error p1077. Create a comment token
// whose data is the "[CDATA[" string. Switch to the bogus comment state p1107.
// ↪ Anything else
// This is an incorrectly-opened-comment p1078 parse error p1077. Create a comment token whose data is the empty string. Switch to
// the bogus comment state p1107 (don't consume anything in the current state).
export class MarkupDeclarationOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
