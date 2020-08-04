enum Characters {
  NullCharacter = '\u0000',        //
  CharacterTabulation = '\u0009',  //
  LineFeed = '\u000A',             //
  FormFeed = '\u000C',             //
  Space = '\u0020',                // ' '
  ExclamationMark = '\u0021',      // '!'
  QuotationMark = '\u0022',        // '"'
  NumberSign = '\u0023',           // '#'
  Apostrophe = '\u0027',           // '''
  Ampersand = '\u0026',            // '&'
  HyphenMinus = '\u002D',          // '-'
  Solidus = '\u002F',              // '/'
  SemiColon = '\u003B',            // ';'
  LessThanSign = '\u003C',         // '<'
  EqualsSign = '\u003D',           // '='
  GreaterThanSign = '\u003E',      // '>'
  QuestionMark = '\u003F',         // '?'
  LatinCapitalLetterX = '\u0058',  // 
  RightSquareBracket = '\u005D',   // ']'
  GraveAccent = '\u0060',          // '`'
  LatinSmallLetterX = '\u0078',    //
  ReplacementCharacter = '\uFFFD', //
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
  Characters,
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
