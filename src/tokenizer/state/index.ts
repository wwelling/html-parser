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

const getStates = (actions: StateActions): States => {
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
  states.dataState = new DataState(states, actions);
  states.rcdataState = new RCDATAState(states, actions);
  states.rawTextState = new RAWTEXTState(states, actions);
  states.scriptDataState = new ScriptDataState(states, actions);
  states.plainTextState = new PLAINTEXTState(states, actions);
  states.tagOpenState = new TagOpenState(states, actions);
  states.endTagOpenState = new EndTagOpenState(states, actions);
  states.tagNameState = new TagNameState(states, actions);
  states.rcdataLessThanSignState = new RCDATALessThanSignState(states, actions);
  states.rcdataEndTagOpenState = new RCDATAEndTagOpenState(states, actions);
  states.rcdataEndTagNameState = new RCDATAEndTagNameState(states, actions);
  states.rawTextLessThanSignState = new RAWTEXTLessThanSignState(states, actions);
  states.rawTextEndTagOpenState = new RAWTEXTEndTagOpenState(states, actions);
  states.rawTextEndTagNameState = new RAWTEXTEndTagNameState(states, actions);
  states.scriptDataLessThanSignState = new ScriptDataLessThanSignState(states, actions);
  states.scriptDataEndTagOpenState = new ScriptDataEndTagOpenState(states, actions);
  states.scriptDataEndTagNameState = new ScriptDataEndTagNameState(states, actions);
  states.scriptDataEscapeStartState = new ScriptDataEscapeStartState(states, actions);
  states.scriptDataEscapeStartDashState = new ScriptDataEscapeStartDashState(states, actions);
  states.scriptDataEscapedState = new ScriptDataEscapedState(states, actions);
  states.scriptDataEscapedDashState = new ScriptDataEscapedDashState(states, actions);
  states.scriptDataEscapedDashDashState = new ScriptDataEscapedDashDashState(states, actions);
  states.scriptDataEscapedLessThanSignState = new ScriptDataEscapedLessThanSignState(states, actions);
  states.scriptDataEscapedEndTagOpenState = new ScriptDataEscapedEndTagOpenState(states, actions);
  states.scriptDataEscapedEndTagNameState = new ScriptDataEscapedEndTagNameState(states, actions);
  states.scriptDataDoubleEscapeStartState = new ScriptDataDoubleEscapeStartState(states, actions);
  states.scriptDataDoubleEscapedState = new ScriptDataDoubleEscapedState(states, actions);
  states.scriptDataDoubleEscapedDashState = new ScriptDataDoubleEscapedDashState(states, actions);
  states.scriptDataDoubleEscapedDashDashState = new ScriptDataDoubleEscapedDashDashState(states, actions);
  states.scriptDataDoubleEscapedLessThanSignState = new ScriptDataDoubleEscapedLessThanSignState(states, actions);
  states.scriptDataDoubleEscapeEndState = new ScriptDataDoubleEscapeEndState(states, actions);
  states.beforeAttributeNameState = new BeforeAttributeNameState(states, actions);
  states.attributeNameState = new AttributeNameState(states, actions);
  states.afterAttributeNameState = new AfterAttributeNameState(states, actions);
  states.beforeAttributeValueState = new BeforeAttributeValueState(states, actions);
  states.attributeValueDoubleQuotedState = new AttributeValueDoubleQuotedState(states, actions);
  states.attributeValueSingleQuotedState = new AttributeValueSingleQuotedState(states, actions);
  states.attributeValueUnquotedState = new AttributeValueUnquotedState(states, actions);
  states.afterAttributeValueQuotedState = new AfterAttributeValueQuotedState(states, actions);
  states.selfClosingStartTagState = new SelfClosingStartTagState(states, actions);
  states.bogusCommentState = new BogusCommentState(states, actions);
  states.markupDeclarationOpenState = new MarkupDeclarationOpenState(states, actions);
  states.commentStartState = new CommentStartState(states, actions);
  states.commentStartDashState = new CommentStartDashState(states, actions);
  states.commentState = new CommentState(states, actions);
  states.commentLessThanSignState = new CommentLessThanSignState(states, actions);
  states.commentLessThanSignBangState = new CommentLessThanSignBangState(states, actions);
  states.commentLessThanSignBangDashState = new CommentLessThanSignBangDashState(states, actions);
  states.commentLessThanSignBangDashDashState = new CommentLessThanSignBangDashDashState(states, actions);
  states.commentEndDashState = new CommentEndDashState(states, actions);
  states.commentEndState = new CommentEndState(states, actions);
  states.commentEndBangState = new CommentEndBangState(states, actions);
  states.doctypeState = new DOCTYPEState(states, actions);
  states.beforeDOCTYPENameState = new BeforeDOCTYPENameState(states, actions);
  states.doctypeNameState = new DOCTYPENameState(states, actions);
  states.afterDOCTYPENameState = new AfterDOCTYPENameState(states, actions);
  states.afterDOCTYPEPublicKeywordState = new AfterDOCTYPEPublicKeywordState(states, actions);
  states.beforeDOCTYPEPublicIdentifierState = new BeforeDOCTYPEPublicIdentifierState(states, actions);
  states.doctypePublicIdentifierDoubleQuotedState = new DOCTYPEPublicIdentifierDoubleQuotedState(states, actions);
  states.doctypePublicIdentifierSingleQuotedState = new DOCTYPEPublicIdentifierSingleQuotedState(states, actions);
  states.afterDOCTYPEPublicIdentifierState = new AfterDOCTYPEPublicIdentifierState(states, actions);
  states.betweenDOCTYPEPublicAndSystemIdentifiersState = new BetweenDOCTYPEPublicAndSystemIdentifiersState(states, actions);
  states.afterDOCTYPESystemKeywordState = new AfterDOCTYPESystemKeywordState(states, actions);
  states.beforeDOCTYPESystemIdentifierState = new BeforeDOCTYPESystemIdentifierState(states, actions);
  states.doctypeSystemIdentifierDoubleQuotedState = new DOCTYPESystemIdentifierDoubleQuotedState(states, actions);
  states.doctypeSystemIdentifierSingleQuotedState = new DOCTYPESystemIdentifierSingleQuotedState(states, actions);
  states.afterDOCTYPESystemIdentifierState = new AfterDOCTYPESystemIdentifierState(states, actions);
  states.bogusDOCTYPEState = new BogusDOCTYPEState(states, actions);
  states.cdataSectionState = new CDATASectionState(states, actions);
  states.cdataSectionBracketState = new CDATASectionBracketState(states, actions);
  states.cdataSectionEndState = new CDATASectionEndState(states, actions);
  states.characterReferenceState = new CharacterReferenceState(states, actions);
  states.namedCharacterReferenceState = new NamedCharacterReferenceState(states, actions);
  states.ambiguousAmpersandState = new AmbiguousAmpersandState(states, actions);
  states.numericCharacterReferenceState = new NumericCharacterReferenceState(states, actions);
  states.hexadecimalCharacterReferenceStartState = new HexadecimalCharacterReferenceStartState(states, actions);
  states.decimalCharacterReferenceStartState = new DecimalCharacterReferenceStartState(states, actions);
  states.hexadecimalCharacterReferenceState = new HexadecimalCharacterReferenceState(states, actions);
  states.decimalCharacterReferenceState = new DecimalCharacterReferenceState(states, actions);
  states.numericCharacterReferenceEndState = new NumericCharacterReferenceEndState(states, actions);
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
