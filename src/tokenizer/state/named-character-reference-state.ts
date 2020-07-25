import { AbstractState } from "./abstract-state";

// 12.2.5.73 Named character reference state
// Consume the maximum number of characters possible, where the consumed characters are identical to one of the identifiers in the
// first column of the named character references p1174 table. Append each character to the temporary buffer p1093 when it's consumed.
// ↪ If there is a match
// If the character reference was consumed as part of an attribute p1093, and the last character matched is not a U+003B
// SEMICOLON character (;), and the next input character p1088 is either a U+003D EQUALS SIGN character (=) or an ASCII
// alphanumeric, then, for historical reasons, flush code points consumed as a character referencep1093 and switch to the return
// statep1093.
// Otherwise:
// 1. If the last character matched is not a U+003B SEMICOLON character (;), then this is a missing-semicolon-aftercharacter-reference p1079 parse error p1077.
// 2. Set the temporary buffer p1093 to the empty string. Append one or two characters corresponding to the character
// reference name (as given by the second column of the named character references p1174 table) to the temporary
// buffer p1093.
// 3. Flush code points consumed as a character reference p1093. Switch to the return state p1093.
// ↪ Otherwise
// Flush code points consumed as a character reference p1093. Switch to the ambiguous ampersand state p1119.
// EXAMPLE: If the markup contains (not in an attribute) the string I'm &notit; I tell you, the character reference is parsed as "not", as in,
// I'm ¬it; I tell you (and this is a parse error). But if the markup was I'm &notin; I tell you, the character reference would
// be parsed as "notin;", resulting in I'm ∉ I tell you (and no parse error).
// However, if the markup contains the string I'm &notit; I tell you in an attribute, no character reference is parsed and string
// remains intact (and there is no parse error).
export class NamedCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
