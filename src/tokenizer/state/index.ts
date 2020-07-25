import { StateCallbacks } from './state-callbacks';

import { State } from './state';
import { AbstractState } from './abstract-state';
import { DataState } from './data-state';
import { RCDATAState } from './rcdate-state';
import { RAWTEXTState } from './rawtext-state';
import { ScriptDataState } from './script-data-state';
import { PLAINTEXTState } from './plaintext-state';
import { TagOpenState } from './tag-open-state';
import { EndTagOpenState } from './end-tag-open-state';
import { TagNameState } from './tag-name-state';
import { RCDATALessThanSignState } from './rcdate-less-than-sign-state';
import { RCDATAEndTagOpenState } from './rcdate-end-tag-open-state';
import { RCDATAEndTagNameState } from './rcdate-end-tag-name-state';
import { RAWTEXTLessThanSignState } from './rawtext-less-than-sign-state';
import { RAWTEXTEndTagOpenState } from './rawtext-end-tag-open-state';
import { RAWTEXTEndTagNameState } from './rawtext-end-tag-name-state';
import { ScriptDataLessThanSignState } from './script-data-less-than-sign-state';
import { ScriptDataEndTagOpenState } from './script-data-end-tag-open-state';
import { ScriptDataEndTagNameState } from './script-data-end-tag-name-state';
import { ScriptDataEscapeStartState } from './script-data-escape-start-state';
import { ScriptDataEscapeStartDashState } from './script-data-escape-start-dash-state';
import { ScriptDataEscapedState } from './script-data-escaped-state';
import { ScriptDataEscapedDashState } from './script-data-escaped-dash-state';
import { ScriptDataEscapedDashDashState } from './script-data-escaped-dash-dash-state';
import { ScriptDataEscapedLessThanSignState } from './script-data-escaped-less-than-sign-state';
import { ScriptDataEscapedEndTagOpenState } from './script-data-escaped-end-tag-open-state';
import { ScriptDataEscapedEndTagNameState } from './script-data-escaped-end-tag-name-state';
import { ScriptDataDoubleEscapeStartState } from './script-data-double-escape-start-state';
import { ScriptDataDoubleEscapedState } from './script-data-double-escaped-state';
import { ScriptDataDoubleEscapedDashState } from './script-data-double-escaped-dash-state';
import { ScriptDataDoubleEscapedDashDashState } from './script-data-double-escaped-dash-dash-state';
import { ScriptDataDoubleEscapedLessThanSignState } from './script-data-double-escaped-less-than-sign-state';
import { ScriptDataDoubleEscapeEndState } from './script-data-double-escape-end-state';
import { BeforeAttributeNameState } from './before-attribute-name-state';
import { AttributeNameState } from './attribute-name-state';
import { AfterAttributeNameState } from './after-attribute-name-state';
import { BeforeAttributeValueState } from './before-attribute-value-state';
import { AttributeValueDoubleQuotedState } from './attribute-value-double-quoted-state';
import { AttributeValueSingleQuotedState } from './attribute-value-single-quoted-state';
import { AttributeValueUnquotedState } from './attribute-value-unquoted-state';
import { AfterAttributeValueQuotedState } from './after-attribute-value-quoted-state';
import { SelfClosingStartTagState } from './self-closing-start-tag-state';
import { BogusCommentState } from './bogus-comment-state';
import { MarkupDeclarationOpenState } from './markup-declaration-open-state';
import { CommentStartState } from './comment-start-state';
import { CommentStartDashState } from './comment-start-dash-state';
import { CommentState } from './comment-state';
import { CommentLessThanSignState } from './comment-less-than-sign-state';
import { CommentLessThanSignBangState } from './comment-less-than-sign-bang-state';
import { CommentLessThanSignBangDashState } from './comment-less-than-sign-bang-dash-state';
import { CommentLessThanSignBangDashDashState } from './comment-less-than-sign-bang-dash-dash-state';
import { CommentEndDashState } from './comment-end-dash-state';
import { CommentEndState } from './comment-end-state';
import { CommentEndBangState } from './comment-end-bang-state';
import { DOCTYPEState } from './doctype-state';
import { BeforeDOCTYPENameState } from './before-doctype-name-state';
import { DOCTYPENameState } from './doctype-name-state';
import { AfterDOCTYPENameState } from './after-doctype-name-state';
import { AfterDOCTYPEPublicKeywordState } from './after-doctype-public-keyword-state';
import { BeforeDOCTYPEPublicIdentifierState } from './before-doctype-public-identifier-state';
import { DOCTYPEPublicIdentifierDoubleQuotedState } from './doctype-public-identifier-double-quoted-state';
import { DOCTYPEPublicIdentifierSingleQuotedState } from './doctype-public-identifier-single-quoted-state';
import { AfterDOCTYPEPublicIdentifierState } from './after-doctype-public-identifier-state';
import { BetweenDOCTYPEPublicAndSystemIdentifiersState } from './between-doctype-public-and-system-identifiers-state';
import { AfterDOCTYPESystemKeywordState } from './after-doctype-system-keyword-state';
import { BeforeDOCTYPESystemIdentifierState } from './before-doctype-system-identifier-state';
import { DOCTYPESystemIdentifierDoubleQuotedState } from './doctype-system-identifier-double-quoted-state';
import { DOCTYPESystemIdentifierSingleQuotedState } from './doctype-system-identifier-single-quoted-state';
import { AfterDOCTYPESystemIdentifierState } from './after-doctype-system-identifier-state';
import { BogusDOCTYPEState } from './bogus-doctype-state';
import { CDATASectionState } from './cdate-section-state';
import { CDATASectionBracketState } from './cdate-section-bracket-state';
import { CDATASectionEndState } from './cdate-section-end-state';
import { CharacterReferenceState } from './character-reference-state';
import { NamedCharacterReferenceState } from './named-character-reference-state';
import { AmbiguousAmpersandState } from './ambiguous-ampersand-state';
import { NumericCharacterReferenceState } from './numeric-character-reference-state';
import { HexadecimalCharacterReferenceStartState } from './hexadecimal-character-reference-start-state';
import { DecimalCharacterReferenceStartState } from './decimal-character-reference-start-state';
import { HexadecimalCharacterReferenceState } from './hexadecimal-character-reference-state';
import { DecimalCharacterReferenceState } from './decimal-character-reference-state';
import { NumericCharacterReferenceEndState } from './numeric-character-reference-end-state';

const getStates = (callbacks: StateCallbacks): { [name: string]: State } => {
  return {
    dataState: new DataState(callbacks),
    rcdataState: new RCDATAState(callbacks),
    rawTextState: new RAWTEXTState(callbacks),
    scriptDataState: new ScriptDataState(callbacks),
    plainTextState: new PLAINTEXTState(callbacks),
    tagOpenState: new TagOpenState(callbacks),
    endTagOpenState: new EndTagOpenState(callbacks),
    tagNameState: new TagNameState(callbacks),
    rcdataLessThanSignState: new RCDATALessThanSignState(callbacks),
    rcdataEndTagOpenState: new RCDATAEndTagOpenState(callbacks),
    rcdataEndTagNameState: new RCDATAEndTagNameState(callbacks),
    rawTextLessThanSignState: new RAWTEXTLessThanSignState(callbacks),
    rawTextEndTagOpenState: new RAWTEXTEndTagOpenState(callbacks),
    rawTextEndTagNameState: new RAWTEXTEndTagNameState(callbacks),
    scriptDataLessThanSignState: new ScriptDataLessThanSignState(callbacks),
    scriptDataEndTagOpenState: new ScriptDataEndTagOpenState(callbacks),
    scriptDataEndTagNameState: new ScriptDataEndTagNameState(callbacks),
    scriptDataEscapeStartState: new ScriptDataEscapeStartState(callbacks),
    scriptDataEscapeStartDashState: new ScriptDataEscapeStartDashState(callbacks),
    scriptDataEscapedState: new ScriptDataEscapedState(callbacks),
    scriptDataEscapedDashState: new ScriptDataEscapedDashState(callbacks),
    scriptDataEscapedDashDashState: new ScriptDataEscapedDashDashState(callbacks),
    scriptDataEscapedLessThanSignState: new ScriptDataEscapedLessThanSignState(callbacks),
    scriptDataEscapedEndTagOpenState: new ScriptDataEscapedEndTagOpenState(callbacks),
    scriptDataEscapedEndTagNameState: new ScriptDataEscapedEndTagNameState(callbacks),
    scriptDataDoubleEscapeStartState: new ScriptDataDoubleEscapeStartState(callbacks),
    scriptDataDoubleEscapedState: new ScriptDataDoubleEscapedState(callbacks),
    scriptDataDoubleEscapedDashState: new ScriptDataDoubleEscapedDashState(callbacks),
    scriptDataDoubleEscapedDashDashState: new ScriptDataDoubleEscapedDashDashState(callbacks),
    scriptDataDoubleEscapedLessThanSignState: new ScriptDataDoubleEscapedLessThanSignState(callbacks),
    scriptDataDoubleEscapeEndState: new ScriptDataDoubleEscapeEndState(callbacks),
    beforeAttributeNameState: new BeforeAttributeNameState(callbacks),
    attributeNameState: new AttributeNameState(callbacks),
    afterAttributeNameState: new AfterAttributeNameState(callbacks),
    beforeAttributeValueState: new BeforeAttributeValueState(callbacks),
    attributeValueDoubleQuotedState: new AttributeValueDoubleQuotedState(callbacks),
    attributeValueSingleQuotedState: new AttributeValueSingleQuotedState(callbacks),
    attributeValueUnquotedState: new AttributeValueUnquotedState(callbacks),
    afterAttributeValueQuotedState: new AfterAttributeValueQuotedState(callbacks),
    selfClosingStartTagState: new SelfClosingStartTagState(callbacks),
    bogusCommentState: new BogusCommentState(callbacks),
    markupDeclarationOpenState: new MarkupDeclarationOpenState(callbacks),
    commentStartState: new CommentStartState(callbacks),
    commentStartDashState: new CommentStartDashState(callbacks),
    commentState: new CommentState(callbacks),
    commentLessThanSignState: new CommentLessThanSignState(callbacks),
    commentLessThanSignBangState: new CommentLessThanSignBangState(callbacks),
    commentLessThanSignBangDashState: new CommentLessThanSignBangDashState(callbacks),
    commentLessThanSignBangDashDashState: new CommentLessThanSignBangDashDashState(callbacks),
    commentEndDashState: new CommentEndDashState(callbacks),
    commentEndState: new CommentEndState(callbacks),
    commentEndBangState: new CommentEndBangState(callbacks),
    doctypeState: new DOCTYPEState(callbacks),
    beforeDOCTYPENameState: new BeforeDOCTYPENameState(callbacks),
    doctypeNameState: new DOCTYPENameState(callbacks),
    afterDOCTYPENameState: new AfterDOCTYPENameState(callbacks),
    afterDOCTYPEPublicKeywordState: new AfterDOCTYPEPublicKeywordState(callbacks),
    beforeDOCTYPEPublicIdentifierState: new BeforeDOCTYPEPublicIdentifierState(callbacks),
    doctypePublicIdentifierDoubleQuotedState: new DOCTYPEPublicIdentifierDoubleQuotedState(callbacks),
    doctypePublicIdentifierSingleQuotedState: new DOCTYPEPublicIdentifierSingleQuotedState(callbacks),
    afterDOCTYPEPublicIdentifierState: new AfterDOCTYPEPublicIdentifierState(callbacks),
    betweenDOCTYPEPublicAndSystemIdentifiersState: new BetweenDOCTYPEPublicAndSystemIdentifiersState(callbacks),
    afterDOCTYPESystemKeywordState: new AfterDOCTYPESystemKeywordState(callbacks),
    beforeDOCTYPESystemIdentifierState: new BeforeDOCTYPESystemIdentifierState(callbacks),
    doctypeSystemIdentifierDoubleQuotedState: new DOCTYPESystemIdentifierDoubleQuotedState(callbacks),
    doctypeSystemIdentifierSingleQuotedState: new DOCTYPESystemIdentifierSingleQuotedState(callbacks),
    afterDOCTYPESystemIdentifierState: new AfterDOCTYPESystemIdentifierState(callbacks),
    bogusDOCTYPEState: new BogusDOCTYPEState(callbacks),
    cdataSectionState: new CDATASectionState(callbacks),
    cdataSectionBracketState: new CDATASectionBracketState(callbacks),
    cdataSectionEndState: new CDATASectionEndState(callbacks),
    characterReferenceState: new CharacterReferenceState(callbacks),
    namedCharacterReferenceState: new NamedCharacterReferenceState(callbacks),
    ambiguousAmpersandState: new AmbiguousAmpersandState(callbacks),
    numericCharacterReferenceState: new NumericCharacterReferenceState(callbacks),
    hexadecimalCharacterReferenceStartState: new HexadecimalCharacterReferenceStartState(callbacks),
    decimalCharacterReferenceStartState: new DecimalCharacterReferenceStartState(callbacks),
    hexadecimalCharacterReferenceState: new HexadecimalCharacterReferenceState(callbacks),
    decimalCharacterReferenceState: new DecimalCharacterReferenceState(callbacks),
    numericCharacterReferenceEndState: new NumericCharacterReferenceEndState(callbacks)
  }
};

export {
  getStates,
  State,
  AbstractState,
  DataState,
  RCDATAState,
  RAWTEXTState,
  ScriptDataState,
  PLAINTEXTState,
  TagOpenState,
  EndTagOpenState,
  TagNameState,
  RCDATALessThanSignState,
  RCDATAEndTagOpenState,
  RCDATAEndTagNameState,
  RAWTEXTLessThanSignState,
  RAWTEXTEndTagOpenState,
  RAWTEXTEndTagNameState,
  ScriptDataLessThanSignState,
  ScriptDataEndTagOpenState,
  ScriptDataEndTagNameState,
  ScriptDataEscapeStartState,
  ScriptDataEscapeStartDashState,
  ScriptDataEscapedState,
  ScriptDataEscapedDashState,
  ScriptDataEscapedDashDashState,
  ScriptDataEscapedLessThanSignState,
  ScriptDataEscapedEndTagOpenState,
  ScriptDataEscapedEndTagNameState,
  ScriptDataDoubleEscapeStartState,
  ScriptDataDoubleEscapedState,
  ScriptDataDoubleEscapedDashState,
  ScriptDataDoubleEscapedDashDashState,
  ScriptDataDoubleEscapedLessThanSignState,
  ScriptDataDoubleEscapeEndState,
  BeforeAttributeNameState,
  AttributeNameState,
  AfterAttributeNameState,
  BeforeAttributeValueState,
  AttributeValueDoubleQuotedState,
  AttributeValueSingleQuotedState,
  AttributeValueUnquotedState,
  AfterAttributeValueQuotedState,
  SelfClosingStartTagState,
  BogusCommentState,
  MarkupDeclarationOpenState,
  CommentStartState,
  CommentStartDashState,
  CommentState,
  CommentLessThanSignState,
  CommentLessThanSignBangState,
  CommentLessThanSignBangDashState,
  CommentLessThanSignBangDashDashState,
  CommentEndDashState,
  CommentEndState,
  CommentEndBangState,
  DOCTYPEState,
  BeforeDOCTYPENameState,
  DOCTYPENameState,
  AfterDOCTYPENameState,
  AfterDOCTYPEPublicKeywordState,
  BeforeDOCTYPEPublicIdentifierState,
  DOCTYPEPublicIdentifierDoubleQuotedState,
  DOCTYPEPublicIdentifierSingleQuotedState,
  AfterDOCTYPEPublicIdentifierState,
  BetweenDOCTYPEPublicAndSystemIdentifiersState,
  AfterDOCTYPESystemKeywordState,
  BeforeDOCTYPESystemIdentifierState,
  DOCTYPESystemIdentifierDoubleQuotedState,
  DOCTYPESystemIdentifierSingleQuotedState,
  AfterDOCTYPESystemIdentifierState,
  BogusDOCTYPEState,
  CDATASectionState,
  CDATASectionBracketState,
  CDATASectionEndState,
  CharacterReferenceState,
  NamedCharacterReferenceState,
  AmbiguousAmpersandState,
  NumericCharacterReferenceState,
  HexadecimalCharacterReferenceStartState,
  DecimalCharacterReferenceStartState,
  HexadecimalCharacterReferenceState,
  DecimalCharacterReferenceState,
  NumericCharacterReferenceEndState
};
