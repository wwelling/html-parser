import {
  AfterAttributeNameState,
  AfterAttributeValueQuotedState,
  AfterDOCTYPENameState,
  AfterDOCTYPEPublicIdentifierState,
  AfterDOCTYPEPublicKeywordState,
  AfterDOCTYPESystemIdentifierState,
  AfterDOCTYPESystemKeywordState,
  AmbiguousAmpersandState,
  AttributeNameState,
  AttributeValueDoubleQuotedState,
  AttributeValueSingleQuotedState,
  AttributeValueUnquotedState,
  BeforeAttributeNameState,
  BeforeAttributeValueState,
  BeforeDOCTYPENameState,
  BeforeDOCTYPEPublicIdentifierState,
  BeforeDOCTYPESystemIdentifierState,
  BetweenDOCTYPEPublicAndSystemIdentifiersState,
  BogusCommentState,
  BogusDOCTYPEState,
  CDATASectionBracketState,
  CDATASectionEndState,
  CDATASectionState,
  CharacterReferenceState,
  CommentEndBangState,
  CommentEndDashState,
  CommentEndState,
  CommentLessThanSignBangDashDashState,
  CommentLessThanSignBangDashState,
  CommentLessThanSignBangState,
  CommentLessThanSignState,
  CommentStartDashState,
  CommentStartState,
  CommentState,
  DOCTYPENameState,
  DOCTYPEPublicIdentifierDoubleQuotedState,
  DOCTYPEPublicIdentifierSingleQuotedState,
  DOCTYPEState,
  DOCTYPESystemIdentifierDoubleQuotedState,
  DOCTYPESystemIdentifierSingleQuotedState,
  DataState,
  DecimalCharacterReferenceStartState,
  DecimalCharacterReferenceState,
  EndTagOpenState,
  HexadecimalCharacterReferenceStartState,
  HexadecimalCharacterReferenceState,
  MarkupDeclarationOpenState,
  NamedCharacterReferenceState,
  NumericCharacterReferenceEndState,
  NumericCharacterReferenceState,
  PLAINTEXTState,
  RAWTEXTEndTagNameState,
  RAWTEXTEndTagOpenState,
  RAWTEXTLessThanSignState,
  RAWTEXTState,
  RCDATAEndTagNameState,
  RCDATAEndTagOpenState,
  RCDATALessThanSignState,
  RCDATAState,
  ScriptDataDoubleEscapeEndState,
  ScriptDataDoubleEscapeStartState,
  ScriptDataDoubleEscapedDashDashState,
  ScriptDataDoubleEscapedDashState,
  ScriptDataDoubleEscapedLessThanSignState,
  ScriptDataDoubleEscapedState,
  ScriptDataEndTagNameState,
  ScriptDataEndTagOpenState,
  ScriptDataEscapeStartDashState,
  ScriptDataEscapeStartState,
  ScriptDataEscapedDashDashState,
  ScriptDataEscapedDashState,
  ScriptDataEscapedEndTagNameState,
  ScriptDataEscapedEndTagOpenState,
  ScriptDataEscapedLessThanSignState,
  ScriptDataEscapedState,
  ScriptDataLessThanSignState,
  ScriptDataState,
  SelfClosingStartTagState,
  State,
  States,
  TagNameState,
  TagOpenState
} from ".";
import {
  Buffer
} from "../buffer";
import {
  StateActions
} from "./state-actions";
import {
  CharacterToken
} from "../token";

export abstract class AbstractState implements State {

  buffer: Buffer;

  private states: States;

  private actions: StateActions;

  constructor(buffer: Buffer, states: States, actions: StateActions) {
    this.buffer = buffer;
    this.states = states;
    this.actions = actions;
  }

  abstract consume(character: string): void;

  switchState(state: State): void {
    this.actions.switchState(state);
  }

  setReturnState(returnState: State): void {
    this.actions.setReturnState(returnState);
  }

  createCommentToken(data = ''): void {
    this.actions.createCommentToken(data);
  }

  createDOCTYPEToken(): void {
    this.actions.createDOCTYPEToken();
  }

  createStartTagToken(name = ''): void {
    this.actions.createStartTagToken(name);
  }

  createEndTagToken(name = ''): void {
    this.actions.createEndTagToken(name);
  }

  startNewTagAttribute(name = '', value = ''): void {
    this.actions.startNewTagAttribute(name, value);
  }

  emitCharacterToken(token: CharacterToken): void {
    this.actions.emitCharacterToken(token);
  }

  emitCommentToken(): void {
    this.actions.emitCommentToken();
  }

  emitDOCTYPEToken(): void {
    this.actions.emitDOCTYPEToken();
  }

  emitStartTagToken(): void {
    this.actions.emitStartTagToken();
  }

  emitEndTagToken(): void {
    this.actions.emitEndTagToken();
  }

  emitEndOfFileToken(): void {
    this.actions.emitEndOfFileToken();
  }

  setTemporaryBuffer(data = ''): void {
    this.actions.setTemporaryBuffer(data);
  }

  appendToTemporaryBuffer(data: string): void {
    this.actions.appendToTemporaryBuffer(data);
  }

  reconsumeInState(character: string, state: State): void {
    this.actions.reconsumeInState(character, state);
  }

  reconsumeInReturnState(character: string): void {
    this.actions.reconsumeInReturnState(character);
  }

  setCharacterReferenceCode(characterReferenceCode: number): void {
    this.actions.setCharacterReferenceCode(characterReferenceCode);
  }

  flushCodePoints(): void {
    this.actions.flushCodePoints();
  }

  get dataState(): DataState {
    return this.states.dataState;
  }

  get rcdataState(): RCDATAState {
    return this.states.rcdataState;
  }

  get rawTextState(): RAWTEXTState {
    return this.states.rawTextState;
  }

  get scriptDataState(): ScriptDataState {
    return this.states.scriptDataState;
  }

  get plainTextState(): PLAINTEXTState {
    return this.states.plainTextState;
  }

  get tagOpenState(): TagOpenState {
    return this.states.tagOpenState;
  }

  get endTagOpenState(): EndTagOpenState {
    return this.states.endTagOpenState;
  }

  get tagNameState(): TagNameState {
    return this.states.tagNameState;
  }

  get rcdataLessThanSignState(): RCDATALessThanSignState {
    return this.states.rcdataLessThanSignState;
  }

  get rcdataEndTagOpenState(): RCDATAEndTagOpenState {
    return this.states.rcdataEndTagOpenState;
  }

  get rcdataEndTagNameState(): RCDATAEndTagNameState {
    return this.states.rcdataEndTagNameState;
  }

  get rawTextLessThanSignState(): RAWTEXTLessThanSignState {
    return this.states.rawTextLessThanSignState;
  }

  get rawTextEndTagOpenState(): RAWTEXTEndTagOpenState {
    return this.states.rawTextEndTagOpenState;
  }

  get rawTextEndTagNameState(): RAWTEXTEndTagNameState {
    return this.states.rawTextEndTagNameState;
  }

  get scriptDataLessThanSignState(): ScriptDataLessThanSignState {
    return this.states.scriptDataLessThanSignState;
  }

  get scriptDataEndTagOpenState(): ScriptDataEndTagOpenState {
    return this.states.scriptDataEndTagOpenState;
  }

  get scriptDataEndTagNameState(): ScriptDataEndTagNameState {
    return this.states.scriptDataEndTagNameState;
  }

  get scriptDataEscapeStartState(): ScriptDataEscapeStartState {
    return this.states.scriptDataEscapeStartState;
  }

  get scriptDataEscapeStartDashState(): ScriptDataEscapeStartDashState {
    return this.states.scriptDataEscapeStartDashState;
  }

  get scriptDataEscapedState(): ScriptDataEscapedState {
    return this.states.scriptDataEscapedState;
  }

  get scriptDataEscapedDashState(): ScriptDataEscapedDashState {
    return this.states.scriptDataEscapedDashState;
  }

  get scriptDataEscapedDashDashState(): ScriptDataEscapedDashDashState {
    return this.states.scriptDataEscapedDashDashState;
  }

  get scriptDataEscapedLessThanSignState(): ScriptDataEscapedLessThanSignState {
    return this.states.scriptDataEscapedLessThanSignState;
  }

  get scriptDataEscapedEndTagOpenState(): ScriptDataEscapedEndTagOpenState {
    return this.states.scriptDataEscapedEndTagOpenState;
  }

  get scriptDataEscapedEndTagNameState(): ScriptDataEscapedEndTagNameState {
    return this.states.scriptDataEscapedEndTagNameState;
  }

  get scriptDataDoubleEscapeStartState(): ScriptDataDoubleEscapeStartState {
    return this.states.scriptDataDoubleEscapeStartState;
  }

  get scriptDataDoubleEscapedState(): ScriptDataDoubleEscapedState {
    return this.states.scriptDataDoubleEscapedState;
  }

  get scriptDataDoubleEscapedDashState(): ScriptDataDoubleEscapedDashState {
    return this.states.scriptDataDoubleEscapedDashState;
  }

  get scriptDataDoubleEscapedDashDashState(): ScriptDataDoubleEscapedDashDashState {
    return this.states.scriptDataDoubleEscapedDashDashState;
  }

  get scriptDataDoubleEscapedLessThanSignState(): ScriptDataDoubleEscapedLessThanSignState {
    return this.states.scriptDataDoubleEscapedLessThanSignState;
  }

  get scriptDataDoubleEscapeEndState(): ScriptDataDoubleEscapeEndState {
    return this.states.scriptDataDoubleEscapeEndState;
  }

  get beforeAttributeNameState(): BeforeAttributeNameState {
    return this.states.beforeAttributeNameState;
  }

  get attributeNameState(): AttributeNameState {
    return this.states.attributeNameState;
  }

  get afterAttributeNameState(): AfterAttributeNameState {
    return this.states.afterAttributeNameState;
  }

  get beforeAttributeValueState(): BeforeAttributeValueState {
    return this.states.beforeAttributeValueState;
  }

  get attributeValueDoubleQuotedState(): AttributeValueDoubleQuotedState {
    return this.states.attributeValueDoubleQuotedState;
  }

  get attributeValueSingleQuotedState(): AttributeValueSingleQuotedState {
    return this.states.attributeValueSingleQuotedState;
  }

  get attributeValueUnquotedState(): AttributeValueUnquotedState {
    return this.states.attributeValueUnquotedState;
  }

  get afterAttributeValueQuotedState(): AfterAttributeValueQuotedState {
    return this.states.afterAttributeValueQuotedState;
  }

  get selfClosingStartTagState(): SelfClosingStartTagState {
    return this.states.selfClosingStartTagState;
  }

  get bogusCommentState(): BogusCommentState {
    return this.states.bogusCommentState;
  }

  get markupDeclarationOpenState(): MarkupDeclarationOpenState {
    return this.states.markupDeclarationOpenState;
  }

  get commentStartState(): CommentStartState {
    return this.states.commentStartState;
  }

  get commentStartDashState(): CommentStartDashState {
    return this.states.commentStartDashState;
  }

  get commentState(): CommentState {
    return this.states.commentState;
  }

  get commentLessThanSignState(): CommentLessThanSignState {
    return this.states.commentLessThanSignState;
  }

  get commentLessThanSignBangState(): CommentLessThanSignBangState {
    return this.states.commentLessThanSignBangState;
  }

  get commentLessThanSignBangDashState(): CommentLessThanSignBangDashState {
    return this.states.commentLessThanSignBangDashState;
  }

  get commentLessThanSignBangDashDashState(): CommentLessThanSignBangDashDashState {
    return this.states.commentLessThanSignBangDashDashState;
  }

  get commentEndDashState(): CommentEndDashState {
    return this.states.commentEndDashState;
  }

  get commentEndState(): CommentEndState {
    return this.states.commentEndState;
  }

  get commentEndBangState(): CommentEndBangState {
    return this.states.commentEndBangState;
  }

  get doctypeState(): DOCTYPEState {
    return this.states.doctypeState;
  }

  get beforeDOCTYPENameState(): BeforeDOCTYPENameState {
    return this.states.beforeDOCTYPENameState;
  }

  get doctypeNameState(): DOCTYPENameState {
    return this.states.doctypeNameState;
  }

  get afterDOCTYPENameState(): AfterDOCTYPENameState {
    return this.states.afterDOCTYPENameState;
  }

  get afterDOCTYPEPublicKeywordState(): AfterDOCTYPEPublicKeywordState {
    return this.states.afterDOCTYPEPublicKeywordState;
  }

  get beforeDOCTYPEPublicIdentifierState(): BeforeDOCTYPEPublicIdentifierState {
    return this.states.beforeDOCTYPEPublicIdentifierState;
  }

  get doctypePublicIdentifierDoubleQuotedState(): DOCTYPEPublicIdentifierDoubleQuotedState {
    return this.states.doctypePublicIdentifierDoubleQuotedState;
  }

  get doctypePublicIdentifierSingleQuotedState(): DOCTYPEPublicIdentifierSingleQuotedState {
    return this.states.doctypePublicIdentifierSingleQuotedState;
  }

  get afterDOCTYPEPublicIdentifierState(): AfterDOCTYPEPublicIdentifierState {
    return this.states.afterDOCTYPEPublicIdentifierState;
  }

  get betweenDOCTYPEPublicAndSystemIdentifiersState(): BetweenDOCTYPEPublicAndSystemIdentifiersState {
    return this.states.betweenDOCTYPEPublicAndSystemIdentifiersState;
  }

  get afterDOCTYPESystemKeywordState(): AfterDOCTYPESystemKeywordState {
    return this.states.afterDOCTYPESystemKeywordState;
  }

  get beforeDOCTYPESystemIdentifierState(): BeforeDOCTYPESystemIdentifierState {
    return this.states.beforeDOCTYPESystemIdentifierState;
  }

  get doctypeSystemIdentifierDoubleQuotedState(): DOCTYPESystemIdentifierDoubleQuotedState {
    return this.states.doctypeSystemIdentifierDoubleQuotedState;
  }

  get doctypeSystemIdentifierSingleQuotedState(): DOCTYPESystemIdentifierSingleQuotedState {
    return this.states.doctypeSystemIdentifierSingleQuotedState;
  }

  get afterDOCTYPESystemIdentifierState(): AfterDOCTYPESystemIdentifierState {
    return this.states.afterDOCTYPESystemIdentifierState;
  }

  get bogusDOCTYPEState(): BogusDOCTYPEState {
    return this.states.bogusDOCTYPEState;
  }

  get cdataSectionState(): CDATASectionState {
    return this.states.cdataSectionState;
  }

  get cdataSectionBracketState(): CDATASectionBracketState {
    return this.states.cdataSectionBracketState;
  }

  get cdataSectionEndState(): CDATASectionEndState {
    return this.states.cdataSectionEndState;
  }

  get characterReferenceState(): CharacterReferenceState {
    return this.states.characterReferenceState;
  }

  get namedCharacterReferenceState(): NamedCharacterReferenceState {
    return this.states.namedCharacterReferenceState;
  }

  get ambiguousAmpersandState(): AmbiguousAmpersandState {
    return this.states.ambiguousAmpersandState;
  }

  get numericCharacterReferenceState(): NumericCharacterReferenceState {
    return this.states.numericCharacterReferenceState;
  }

  get hexadecimalCharacterReferenceStartState(): HexadecimalCharacterReferenceStartState {
    return this.states.hexadecimalCharacterReferenceStartState;
  }

  get decimalCharacterReferenceStartState(): DecimalCharacterReferenceStartState {
    return this.states.decimalCharacterReferenceStartState;
  }

  get hexadecimalCharacterReferenceState(): HexadecimalCharacterReferenceState {
    return this.states.hexadecimalCharacterReferenceState;
  }

  get decimalCharacterReferenceState(): DecimalCharacterReferenceState {
    return this.states.decimalCharacterReferenceState;
  }

  get numericCharacterReferenceEndState(): NumericCharacterReferenceEndState {
    return this.states.numericCharacterReferenceEndState;
  }

}
