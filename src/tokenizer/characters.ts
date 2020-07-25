const characters: { [name: string]: string } = {
  nullCharacter: '\0000',        //
  characterTabulation: '\u0009', //
  lineFeed: '\u000A',            //
  formFeed: '\u000C',            //
  space: '\u0020',               // ' '
  exclamationMark: '\u0021',     // '!'
  quotationMark: '\u0022',       // '"'
  numberSign: '\u0023',          // '#'
  apostrophe: '\u0027',          // '''
  ampersand: '\u0026',           // '&'
  hyphenMinu: '\u002D',          // '-'
  solidus: '\u002F',             // '/'
  semiColon: '\u003B',           // ';'
  lessThanSign: '\u003C',        // '<'
  equalsSign: '\u003D',          // '='
  greaterThanSign: '\u003E',     // '>'
  questionMark: '\u003F',        // '?'
  latinCapitalLetterX: '\u0058', // 
  rightSquareBracket: '\u005D',  // ']'
  graveAccent: '\u0060',         // '`'
  latinSmallLetterX: '\u0078',   //
}

const isASCIICaseInsensitiveMatch = (value: string, match: string): boolean => {
  return value.toLowerCase() === match.toLowerCase();
}

const isASCIIAlpha = (character: string): boolean => {
  const code = toCharCode(character);
  return isCharCodeUpperAlpha(code) || isCharCodeLowerAlpha(code);
}

const isASCIIUpperAlpha = (character: string): boolean => {
  return isCharCodeUpperAlpha(toCharCode(character));
}

const isCharCodeUpperAlpha = (code: number): boolean => {
  return (code > 64 && code < 91); // upper alpha (A-Z)
}

const isASCIILowerAlpha = (character: string): boolean => {
  return isCharCodeLowerAlpha(toCharCode(character));
}

const isCharCodeLowerAlpha = (code: number): boolean => {
  return (code > 96 && code < 123); // lower alpha (a-z)
}

const isASCIIDigit = (character: string): boolean => {
  return isCharCodeDigit(toCharCode(character));
}

const isCharCodeDigit = (code: number): boolean => {
  return (code > 47 && code < 58); // numeric (0-9)
}

const isASCIIAlphanumeric = (character: string): boolean => {
  const code = toCharCode(character);
  return isCharCodeUpperAlpha(code) || isCharCodeLowerAlpha(code) || isCharCodeDigit(code);
}

const isASCIIHexDigit = (character: string): boolean => {
  const code = toCharCode(character);
  return isCharCodeUpperHexDigit(code) || isCharCodeLowerHexDigit(code);
}

const isASCIIUpperHexDigit = (character: string): boolean => {
  return isCharCodeUpperHexDigit(toCharCode(character));
}

const isCharCodeUpperHexDigit = (code: number): boolean => {
  return (code > 64 && code < 71); // upper alpha (A-F)
}

const isASCIILowerHexDigit = (character: string): boolean => {
  return isCharCodeLowerHexDigit(toCharCode(character));
}

const isCharCodeLowerHexDigit = (code: number): boolean => {
  return (code > 96 && code < 103); // lower alpha (a-f)
}

const toCharCode = (character: string): number => {
  return character.charCodeAt(0);
}

export {
  characters,
  isASCIIAlpha,
  isASCIIUpperAlpha,
  isASCIILowerAlpha,
  isASCIIDigit,
  isASCIIAlphanumeric,
  isASCIICaseInsensitiveMatch,
  isASCIIHexDigit,
  isASCIIUpperHexDigit,
  isASCIILowerHexDigit
};
