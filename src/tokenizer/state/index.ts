import { StateActions } from './state-actions';

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
import { Buffer } from '../buffer';

interface States {
  dataState: DataState;
  rcdataState: RCDATAState;
  rawTextState: RAWTEXTState;
  scriptDataState: ScriptDataState;
  plainTextState: PLAINTEXTState;
  tagOpenState: TagOpenState;
  endTagOpenState: EndTagOpenState;
  tagNameState: TagNameState;
  rcdataLessThanSignState: RCDATALessThanSignState;
  rcdataEndTagOpenState: RCDATAEndTagOpenState;
  rcdataEndTagNameState: RCDATAEndTagNameState;
  rawTextLessThanSignState: RAWTEXTLessThanSignState;
  rawTextEndTagOpenState: RAWTEXTEndTagOpenState;
  rawTextEndTagNameState: RAWTEXTEndTagNameState;
  scriptDataLessThanSignState: ScriptDataLessThanSignState;
  scriptDataEndTagOpenState: ScriptDataEndTagOpenState;
  scriptDataEndTagNameState: ScriptDataEndTagNameState;
  scriptDataEscapeStartState: ScriptDataEscapeStartState;
  scriptDataEscapeStartDashState: ScriptDataEscapeStartDashState;
  scriptDataEscapedState: ScriptDataEscapedState;
  scriptDataEscapedDashState: ScriptDataEscapedDashState;
  scriptDataEscapedDashDashState: ScriptDataEscapedDashDashState;
  scriptDataEscapedLessThanSignState: ScriptDataEscapedLessThanSignState;
  scriptDataEscapedEndTagOpenState: ScriptDataEscapedEndTagOpenState;
  scriptDataEscapedEndTagNameState: ScriptDataEscapedEndTagNameState;
  scriptDataDoubleEscapeStartState: ScriptDataDoubleEscapeStartState;
  scriptDataDoubleEscapedState: ScriptDataDoubleEscapedState;
  scriptDataDoubleEscapedDashState: ScriptDataDoubleEscapedDashState;
  scriptDataDoubleEscapedDashDashState: ScriptDataDoubleEscapedDashDashState;
  scriptDataDoubleEscapedLessThanSignState: ScriptDataDoubleEscapedLessThanSignState;
  scriptDataDoubleEscapeEndState: ScriptDataDoubleEscapeEndState;
  beforeAttributeNameState: BeforeAttributeNameState;
  attributeNameState: AttributeNameState;
  afterAttributeNameState: AfterAttributeNameState;
  beforeAttributeValueState: BeforeAttributeValueState;
  attributeValueDoubleQuotedState: AttributeValueDoubleQuotedState;
  attributeValueSingleQuotedState: AttributeValueSingleQuotedState;
  attributeValueUnquotedState: AttributeValueUnquotedState;
  afterAttributeValueQuotedState: AfterAttributeValueQuotedState;
  selfClosingStartTagState: SelfClosingStartTagState;
  bogusCommentState: BogusCommentState;
  markupDeclarationOpenState: MarkupDeclarationOpenState;
  commentStartState: CommentStartState;
  commentStartDashState: CommentStartDashState;
  commentState: CommentState;
  commentLessThanSignState: CommentLessThanSignState;
  commentLessThanSignBangState: CommentLessThanSignBangState;
  commentLessThanSignBangDashState: CommentLessThanSignBangDashState;
  commentLessThanSignBangDashDashState: CommentLessThanSignBangDashDashState;
  commentEndDashState: CommentEndDashState;
  commentEndState: CommentEndState;
  commentEndBangState: CommentEndBangState;
  doctypeState: DOCTYPEState;
  beforeDOCTYPENameState: BeforeDOCTYPENameState;
  doctypeNameState: DOCTYPENameState;
  afterDOCTYPENameState: AfterDOCTYPENameState;
  afterDOCTYPEPublicKeywordState: AfterDOCTYPEPublicKeywordState;
  beforeDOCTYPEPublicIdentifierState: BeforeDOCTYPEPublicIdentifierState;
  doctypePublicIdentifierDoubleQuotedState: DOCTYPEPublicIdentifierDoubleQuotedState;
  doctypePublicIdentifierSingleQuotedState: DOCTYPEPublicIdentifierSingleQuotedState;
  afterDOCTYPEPublicIdentifierState: AfterDOCTYPEPublicIdentifierState;
  betweenDOCTYPEPublicAndSystemIdentifiersState: BetweenDOCTYPEPublicAndSystemIdentifiersState;
  afterDOCTYPESystemKeywordState: AfterDOCTYPESystemKeywordState;
  beforeDOCTYPESystemIdentifierState: BeforeDOCTYPESystemIdentifierState;
  doctypeSystemIdentifierDoubleQuotedState: DOCTYPESystemIdentifierDoubleQuotedState;
  doctypeSystemIdentifierSingleQuotedState: DOCTYPESystemIdentifierSingleQuotedState;
  afterDOCTYPESystemIdentifierState: AfterDOCTYPESystemIdentifierState;
  bogusDOCTYPEState: BogusDOCTYPEState;
  cdataSectionState: CDATASectionState;
  cdataSectionBracketState: CDATASectionBracketState;
  cdataSectionEndState: CDATASectionEndState;
  characterReferenceState: CharacterReferenceState;
  namedCharacterReferenceState: NamedCharacterReferenceState;
  ambiguousAmpersandState: AmbiguousAmpersandState;
  numericCharacterReferenceState: NumericCharacterReferenceState;
  hexadecimalCharacterReferenceStartState: HexadecimalCharacterReferenceStartState;
  decimalCharacterReferenceStartState: DecimalCharacterReferenceStartState;
  hexadecimalCharacterReferenceState: HexadecimalCharacterReferenceState;
  decimalCharacterReferenceState: DecimalCharacterReferenceState;
  numericCharacterReferenceEndState: NumericCharacterReferenceEndState;
}

const getStates = (buffer: Buffer, actions: StateActions): States => {
  const states: States = {
    dataState: undefined,
    rcdataState: undefined,
    rawTextState: undefined,
    scriptDataState: undefined,
    plainTextState: undefined,
    tagOpenState: undefined,
    endTagOpenState: undefined,
    tagNameState: undefined,
    rcdataLessThanSignState: undefined,
    rcdataEndTagOpenState: undefined,
    rcdataEndTagNameState: undefined,
    rawTextLessThanSignState: undefined,
    rawTextEndTagOpenState: undefined,
    rawTextEndTagNameState: undefined,
    scriptDataLessThanSignState: undefined,
    scriptDataEndTagOpenState: undefined,
    scriptDataEndTagNameState: undefined,
    scriptDataEscapeStartState: undefined,
    scriptDataEscapeStartDashState: undefined,
    scriptDataEscapedState: undefined,
    scriptDataEscapedDashState: undefined,
    scriptDataEscapedDashDashState: undefined,
    scriptDataEscapedLessThanSignState: undefined,
    scriptDataEscapedEndTagOpenState: undefined,
    scriptDataEscapedEndTagNameState: undefined,
    scriptDataDoubleEscapeStartState: undefined,
    scriptDataDoubleEscapedState: undefined,
    scriptDataDoubleEscapedDashState: undefined,
    scriptDataDoubleEscapedDashDashState: undefined,
    scriptDataDoubleEscapedLessThanSignState: undefined,
    scriptDataDoubleEscapeEndState: undefined,
    beforeAttributeNameState: undefined,
    attributeNameState: undefined,
    afterAttributeNameState: undefined,
    beforeAttributeValueState: undefined,
    attributeValueDoubleQuotedState: undefined,
    attributeValueSingleQuotedState: undefined,
    attributeValueUnquotedState: undefined,
    afterAttributeValueQuotedState: undefined,
    selfClosingStartTagState: undefined,
    bogusCommentState: undefined,
    markupDeclarationOpenState: undefined,
    commentStartState: undefined,
    commentStartDashState: undefined,
    commentState: undefined,
    commentLessThanSignState: undefined,
    commentLessThanSignBangState: undefined,
    commentLessThanSignBangDashState: undefined,
    commentLessThanSignBangDashDashState: undefined,
    commentEndDashState: undefined,
    commentEndState: undefined,
    commentEndBangState: undefined,
    doctypeState: undefined,
    beforeDOCTYPENameState: undefined,
    doctypeNameState: undefined,
    afterDOCTYPENameState: undefined,
    afterDOCTYPEPublicKeywordState: undefined,
    beforeDOCTYPEPublicIdentifierState: undefined,
    doctypePublicIdentifierDoubleQuotedState: undefined,
    doctypePublicIdentifierSingleQuotedState: undefined,
    afterDOCTYPEPublicIdentifierState: undefined,
    betweenDOCTYPEPublicAndSystemIdentifiersState: undefined,
    afterDOCTYPESystemKeywordState: undefined,
    beforeDOCTYPESystemIdentifierState: undefined,
    doctypeSystemIdentifierDoubleQuotedState: undefined,
    doctypeSystemIdentifierSingleQuotedState: undefined,
    afterDOCTYPESystemIdentifierState: undefined,
    bogusDOCTYPEState: undefined,
    cdataSectionState: undefined,
    cdataSectionBracketState: undefined,
    cdataSectionEndState: undefined,
    characterReferenceState: undefined,
    namedCharacterReferenceState: undefined,
    ambiguousAmpersandState: undefined,
    numericCharacterReferenceState: undefined,
    hexadecimalCharacterReferenceStartState: undefined,
    decimalCharacterReferenceStartState: undefined,
    hexadecimalCharacterReferenceState: undefined,
    decimalCharacterReferenceState: undefined,
    numericCharacterReferenceEndState: undefined
  };
  states.dataState = new DataState(buffer, states, actions);
  states.rcdataState = new RCDATAState(buffer, states, actions);
  states.rawTextState = new RAWTEXTState(buffer, states, actions);
  states.scriptDataState = new ScriptDataState(buffer, states, actions);
  states.plainTextState = new PLAINTEXTState(buffer, states, actions);
  states.tagOpenState = new TagOpenState(buffer, states, actions);
  states.endTagOpenState = new EndTagOpenState(buffer, states, actions);
  states.tagNameState = new TagNameState(buffer, states, actions);
  states.rcdataLessThanSignState = new RCDATALessThanSignState(buffer, states, actions);
  states.rcdataEndTagOpenState = new RCDATAEndTagOpenState(buffer, states, actions);
  states.rcdataEndTagNameState = new RCDATAEndTagNameState(buffer, states, actions);
  states.rawTextLessThanSignState = new RAWTEXTLessThanSignState(buffer, states, actions);
  states.rawTextEndTagOpenState = new RAWTEXTEndTagOpenState(buffer, states, actions);
  states.rawTextEndTagNameState = new RAWTEXTEndTagNameState(buffer, states, actions);
  states.scriptDataLessThanSignState = new ScriptDataLessThanSignState(buffer, states, actions);
  states.scriptDataEndTagOpenState = new ScriptDataEndTagOpenState(buffer, states, actions);
  states.scriptDataEndTagNameState = new ScriptDataEndTagNameState(buffer, states, actions);
  states.scriptDataEscapeStartState = new ScriptDataEscapeStartState(buffer, states, actions);
  states.scriptDataEscapeStartDashState = new ScriptDataEscapeStartDashState(buffer, states, actions);
  states.scriptDataEscapedState = new ScriptDataEscapedState(buffer, states, actions);
  states.scriptDataEscapedDashState = new ScriptDataEscapedDashState(buffer, states, actions);
  states.scriptDataEscapedDashDashState = new ScriptDataEscapedDashDashState(buffer, states, actions);
  states.scriptDataEscapedLessThanSignState = new ScriptDataEscapedLessThanSignState(buffer, states, actions);
  states.scriptDataEscapedEndTagOpenState = new ScriptDataEscapedEndTagOpenState(buffer, states, actions);
  states.scriptDataEscapedEndTagNameState = new ScriptDataEscapedEndTagNameState(buffer, states, actions);
  states.scriptDataDoubleEscapeStartState = new ScriptDataDoubleEscapeStartState(buffer, states, actions);
  states.scriptDataDoubleEscapedState = new ScriptDataDoubleEscapedState(buffer, states, actions);
  states.scriptDataDoubleEscapedDashState = new ScriptDataDoubleEscapedDashState(buffer, states, actions);
  states.scriptDataDoubleEscapedDashDashState = new ScriptDataDoubleEscapedDashDashState(buffer, states, actions);
  states.scriptDataDoubleEscapedLessThanSignState = new ScriptDataDoubleEscapedLessThanSignState(buffer, states, actions);
  states.scriptDataDoubleEscapeEndState = new ScriptDataDoubleEscapeEndState(buffer, states, actions);
  states.beforeAttributeNameState = new BeforeAttributeNameState(buffer, states, actions);
  states.attributeNameState = new AttributeNameState(buffer, states, actions);
  states.afterAttributeNameState = new AfterAttributeNameState(buffer, states, actions);
  states.beforeAttributeValueState = new BeforeAttributeValueState(buffer, states, actions);
  states.attributeValueDoubleQuotedState = new AttributeValueDoubleQuotedState(buffer, states, actions);
  states.attributeValueSingleQuotedState = new AttributeValueSingleQuotedState(buffer, states, actions);
  states.attributeValueUnquotedState = new AttributeValueUnquotedState(buffer, states, actions);
  states.afterAttributeValueQuotedState = new AfterAttributeValueQuotedState(buffer, states, actions);
  states.selfClosingStartTagState = new SelfClosingStartTagState(buffer, states, actions);
  states.bogusCommentState = new BogusCommentState(buffer, states, actions);
  states.markupDeclarationOpenState = new MarkupDeclarationOpenState(buffer, states, actions);
  states.commentStartState = new CommentStartState(buffer, states, actions);
  states.commentStartDashState = new CommentStartDashState(buffer, states, actions);
  states.commentState = new CommentState(buffer, states, actions);
  states.commentLessThanSignState = new CommentLessThanSignState(buffer, states, actions);
  states.commentLessThanSignBangState = new CommentLessThanSignBangState(buffer, states, actions);
  states.commentLessThanSignBangDashState = new CommentLessThanSignBangDashState(buffer, states, actions);
  states.commentLessThanSignBangDashDashState = new CommentLessThanSignBangDashDashState(buffer, states, actions);
  states.commentEndDashState = new CommentEndDashState(buffer, states, actions);
  states.commentEndState = new CommentEndState(buffer, states, actions);
  states.commentEndBangState = new CommentEndBangState(buffer, states, actions);
  states.doctypeState = new DOCTYPEState(buffer, states, actions);
  states.beforeDOCTYPENameState = new BeforeDOCTYPENameState(buffer, states, actions);
  states.doctypeNameState = new DOCTYPENameState(buffer, states, actions);
  states.afterDOCTYPENameState = new AfterDOCTYPENameState(buffer, states, actions);
  states.afterDOCTYPEPublicKeywordState = new AfterDOCTYPEPublicKeywordState(buffer, states, actions);
  states.beforeDOCTYPEPublicIdentifierState = new BeforeDOCTYPEPublicIdentifierState(buffer, states, actions);
  states.doctypePublicIdentifierDoubleQuotedState = new DOCTYPEPublicIdentifierDoubleQuotedState(buffer, states, actions);
  states.doctypePublicIdentifierSingleQuotedState = new DOCTYPEPublicIdentifierSingleQuotedState(buffer, states, actions);
  states.afterDOCTYPEPublicIdentifierState = new AfterDOCTYPEPublicIdentifierState(buffer, states, actions);
  states.betweenDOCTYPEPublicAndSystemIdentifiersState = new BetweenDOCTYPEPublicAndSystemIdentifiersState(buffer, states, actions);
  states.afterDOCTYPESystemKeywordState = new AfterDOCTYPESystemKeywordState(buffer, states, actions);
  states.beforeDOCTYPESystemIdentifierState = new BeforeDOCTYPESystemIdentifierState(buffer, states, actions);
  states.doctypeSystemIdentifierDoubleQuotedState = new DOCTYPESystemIdentifierDoubleQuotedState(buffer, states, actions);
  states.doctypeSystemIdentifierSingleQuotedState = new DOCTYPESystemIdentifierSingleQuotedState(buffer, states, actions);
  states.afterDOCTYPESystemIdentifierState = new AfterDOCTYPESystemIdentifierState(buffer, states, actions);
  states.bogusDOCTYPEState = new BogusDOCTYPEState(buffer, states, actions);
  states.cdataSectionState = new CDATASectionState(buffer, states, actions);
  states.cdataSectionBracketState = new CDATASectionBracketState(buffer, states, actions);
  states.cdataSectionEndState = new CDATASectionEndState(buffer, states, actions);
  states.characterReferenceState = new CharacterReferenceState(buffer, states, actions);
  states.namedCharacterReferenceState = new NamedCharacterReferenceState(buffer, states, actions);
  states.ambiguousAmpersandState = new AmbiguousAmpersandState(buffer, states, actions);
  states.numericCharacterReferenceState = new NumericCharacterReferenceState(buffer, states, actions);
  states.hexadecimalCharacterReferenceStartState = new HexadecimalCharacterReferenceStartState(buffer, states, actions);
  states.decimalCharacterReferenceStartState = new DecimalCharacterReferenceStartState(buffer, states, actions);
  states.hexadecimalCharacterReferenceState = new HexadecimalCharacterReferenceState(buffer, states, actions);
  states.decimalCharacterReferenceState = new DecimalCharacterReferenceState(buffer, states, actions);
  states.numericCharacterReferenceEndState = new NumericCharacterReferenceEndState(buffer, states, actions);
  return states;
};

export {
  getStates,
  States,
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
