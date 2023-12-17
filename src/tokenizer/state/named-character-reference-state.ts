import { AbstractState } from "./abstract-state";

// 12.2.5.73 Named character reference state
// Consume the maximum number of characters possible, where the consumed characters are identical to one of the identifiers in the
// first column of the named character references table. Append each character to the temporary buffer when it's consumed.
// ↪ If there is a match
// If the character reference was consumed as part of an attribute, and the last character matched is not a U+003B
// SEMICOLON character (;), and the next input character is either a U+003D EQUALS SIGN character (=) or an ASCII
// alphanumeric, then, for historical reasons, flush code points consumed as a character reference and switch to the return
// state.
// Otherwise:
// 1. If the last character matched is not a U+003B SEMICOLON character (;), then this is a missing-semicolon-aftercharacter-reference parse error.
// 2. Set the temporary buffer to the empty string. Append one or two characters corresponding to the character
// reference name (as given by the second column of the named character references table) to the temporary
// buffer.
// 3. Flush code points consumed as a character reference. Switch to the return state.
// ↪ Otherwise
// Flush code points consumed as a character reference. Switch to the ambiguous ampersand state.

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
