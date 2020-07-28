import { AfterAttributeNameState, AfterAttributeValueQuotedState, AfterDOCTYPENameState, AfterDOCTYPEPublicIdentifierState, AfterDOCTYPEPublicKeywordState, AfterDOCTYPESystemIdentifierState, AfterDOCTYPESystemKeywordState, AmbiguousAmpersandState, AttributeNameState, AttributeValueDoubleQuotedState, AttributeValueSingleQuotedState, AttributeValueUnquotedState, BeforeAttributeNameState, BeforeAttributeValueState, BeforeDOCTYPENameState, BeforeDOCTYPEPublicIdentifierState, BeforeDOCTYPESystemIdentifierState, BetweenDOCTYPEPublicAndSystemIdentifiersState, BogusCommentState, BogusDOCTYPEState, CDATASectionBracketState, CDATASectionEndState, CDATASectionState, CharacterReferenceState, CommentEndBangState, CommentEndDashState, CommentEndState, CommentLessThanSignBangDashDashState, CommentLessThanSignBangDashState, CommentLessThanSignBangState, CommentLessThanSignState, CommentStartDashState, CommentStartState, CommentState, DataState, DecimalCharacterReferenceStartState, DecimalCharacterReferenceState, DOCTYPENameState, DOCTYPEPublicIdentifierDoubleQuotedState, DOCTYPEPublicIdentifierSingleQuotedState, DOCTYPEState, DOCTYPESystemIdentifierDoubleQuotedState, DOCTYPESystemIdentifierSingleQuotedState, EndTagOpenState, HexadecimalCharacterReferenceStartState, HexadecimalCharacterReferenceState, MarkupDeclarationOpenState, NamedCharacterReferenceState, NumericCharacterReferenceEndState, NumericCharacterReferenceState, PLAINTEXTState, RAWTEXTEndTagNameState, RAWTEXTEndTagOpenState, RAWTEXTLessThanSignState, RAWTEXTState, RCDATAEndTagNameState, RCDATAEndTagOpenState, RCDATALessThanSignState, RCDATAState, ScriptDataDoubleEscapedDashDashState, ScriptDataDoubleEscapedDashState, ScriptDataDoubleEscapedLessThanSignState, ScriptDataDoubleEscapedState, ScriptDataDoubleEscapeEndState, ScriptDataDoubleEscapeStartState, ScriptDataEndTagNameState, ScriptDataEndTagOpenState, ScriptDataEscapedDashDashState, ScriptDataEscapedDashState, ScriptDataEscapedEndTagNameState, ScriptDataEscapedEndTagOpenState, ScriptDataEscapedLessThanSignState, ScriptDataEscapedState, ScriptDataEscapeStartDashState, ScriptDataEscapeStartState, ScriptDataLessThanSignState, ScriptDataState, SelfClosingStartTagState, State, TagNameState, TagOpenState } from ".";
import { Buffer } from "../buffer";
import { CharacterToken, CommentToken, DOCTYPEToken, StartTagToken, EndTagToken } from "../token";
import Tokenizer from "../tokenizer";

export abstract class AbstractState implements State {

  private tokenizer: Tokenizer;

  constructor(tokenizer: Tokenizer) {
    this.tokenizer = tokenizer;
  }

  abstract consume(character: string): void;

  switchState(state: State): void {
    this.tokenizer.state = state;
  }

  setReturnState(returnState: State): void {
    this.tokenizer.returnState = returnState;
  }

  createCommentToken(data = ''): void {
    this.tokenizer.commentToken = { data };
  }

  createDOCTYPEToken(): void {
    this.tokenizer.doctypeToken = { forceQuirks: 'off' };
  }

  createStartTagToken(name = ''): void {
    this.tokenizer.startTagToken = { name, attributes: [], selfClosing: 'unset' };
  }

  createEndTagToken(name = ''): void {
    this.tokenizer.endTagToken = { name };
  }

  startNewTagAttribute(name = '', value = ''): void {
    this.tokenizer.startTagToken.attributes.push({ name, value });
  }

  emitCharacterToken(token: CharacterToken): void {
    this.tokenizer.callbacks.emitCharacterToken(token);
  }

  emitCommentToken(): void {
    this.tokenizer.callbacks.emitCommentToken(this.tokenizer.commentToken);
  }

  emitDOCTYPEToken(): void {
    this.tokenizer.callbacks.emitDOCTYPEToken(this.tokenizer.doctypeToken);
  }

  emitStartTagToken(): void {
    this.tokenizer.callbacks.emitStartTagToken(this.tokenizer.startTagToken);
  }

  emitEndTagToken(): void {
    this.tokenizer.callbacks.emitEndTagToken(this.tokenizer.endTagToken);
  }

  emitEndOfFileToken(): void {
    this.tokenizer.callbacks.emitEndOfFileToken();
  }

  reconsumeInState(character: string, state: State): void {
    this.tokenizer.state = state;
    this.tokenizer.state.consume(character);
  }

  reconsumeInReturnState(character: string): void {
    this.tokenizer.state = this.tokenizer.returnState;
    this.tokenizer.state.consume(character);
  }

  flushCodePoints(): void {
    // TODO
  }

  get temporaryBuffer(): string {
    return this.tokenizer.temporaryBuffer;
  }

  set temporaryBuffer(temporaryBuffer: string) {
    this.tokenizer.temporaryBuffer = temporaryBuffer;
  }

  get characterReferenceCode(): number {
    return this.tokenizer.characterReferenceCode;
  }

  get commentToken(): CommentToken {
    return this.tokenizer.commentToken;
  }

  get doctypeToken(): DOCTYPEToken {
    return this.tokenizer.doctypeToken;
  }

  get startTagToken(): StartTagToken {
    return this.tokenizer.startTagToken;
  }

  get endTagToken(): EndTagToken {
    return this.tokenizer.endTagToken;
  }

  get dataState(): DataState {
    return this.tokenizer.dataState;
  }

  get buffer(): Buffer {
    return this.tokenizer.buffer;
  }

  get rcdataState(): RCDATAState {
    return this.tokenizer.rcdataState;
  }

  get rawTextState(): RAWTEXTState {
    return this.tokenizer.rawTextState;
  }

  get scriptDataState(): ScriptDataState {
    return this.tokenizer.scriptDataState;
  }

  get plainTextState(): PLAINTEXTState {
    return this.tokenizer.plainTextState;
  }

  get tagOpenState(): TagOpenState {
    return this.tokenizer.tagOpenState;
  }

  get endTagOpenState(): EndTagOpenState {
    return this.tokenizer.endTagOpenState;
  }

  get tagNameState(): TagNameState {
    return this.tokenizer.tagNameState;
  }

  get rcdataLessThanSignState(): RCDATALessThanSignState {
    return this.tokenizer.rcdataLessThanSignState;
  }

  get rcdataEndTagOpenState(): RCDATAEndTagOpenState {
    return this.tokenizer.rcdataEndTagOpenState;
  }

  get rcdataEndTagNameState(): RCDATAEndTagNameState {
    return this.tokenizer.rcdataEndTagNameState;
  }

  get rawTextLessThanSignState(): RAWTEXTLessThanSignState {
    return this.tokenizer.rawTextLessThanSignState;
  }

  get rawTextEndTagOpenState(): RAWTEXTEndTagOpenState {
    return this.tokenizer.rawTextEndTagOpenState;
  }

  get rawTextEndTagNameState(): RAWTEXTEndTagNameState {
    return this.tokenizer.rawTextEndTagNameState;
  }

  get scriptDataLessThanSignState(): ScriptDataLessThanSignState {
    return this.tokenizer.scriptDataLessThanSignState;
  }

  get scriptDataEndTagOpenState(): ScriptDataEndTagOpenState {
    return this.tokenizer.scriptDataEndTagOpenState;
  }

  get scriptDataEndTagNameState(): ScriptDataEndTagNameState {
    return this.tokenizer.scriptDataEndTagNameState;
  }

  get scriptDataEscapeStartState(): ScriptDataEscapeStartState {
    return this.tokenizer.scriptDataEscapeStartState;
  }

  get scriptDataEscapeStartDashState(): ScriptDataEscapeStartDashState {
    return this.tokenizer.scriptDataEscapeStartDashState;
  }

  get scriptDataEscapedState(): ScriptDataEscapedState {
    return this.tokenizer.scriptDataEscapedState;
  }

  get scriptDataEscapedDashState(): ScriptDataEscapedDashState {
    return this.tokenizer.scriptDataEscapedDashState;
  }

  get scriptDataEscapedDashDashState(): ScriptDataEscapedDashDashState {
    return this.tokenizer.scriptDataEscapedDashDashState;
  }

  get scriptDataEscapedLessThanSignState(): ScriptDataEscapedLessThanSignState {
    return this.tokenizer.scriptDataEscapedLessThanSignState;
  }

  get scriptDataEscapedEndTagOpenState(): ScriptDataEscapedEndTagOpenState {
    return this.tokenizer.scriptDataEscapedEndTagOpenState;
  }

  get scriptDataEscapedEndTagNameState(): ScriptDataEscapedEndTagNameState {
    return this.tokenizer.scriptDataEscapedEndTagNameState;
  }

  get scriptDataDoubleEscapeStartState(): ScriptDataDoubleEscapeStartState {
    return this.tokenizer.scriptDataDoubleEscapeStartState;
  }

  get scriptDataDoubleEscapedState(): ScriptDataDoubleEscapedState {
    return this.tokenizer.scriptDataDoubleEscapedState;
  }

  get scriptDataDoubleEscapedDashState(): ScriptDataDoubleEscapedDashState {
    return this.tokenizer.scriptDataDoubleEscapedDashState;
  }

  get scriptDataDoubleEscapedDashDashState(): ScriptDataDoubleEscapedDashDashState {
    return this.tokenizer.scriptDataDoubleEscapedDashDashState;
  }

  get scriptDataDoubleEscapedLessThanSignState(): ScriptDataDoubleEscapedLessThanSignState {
    return this.tokenizer.scriptDataDoubleEscapedLessThanSignState;
  }

  get scriptDataDoubleEscapeEndState(): ScriptDataDoubleEscapeEndState {
    return this.tokenizer.scriptDataDoubleEscapeEndState;
  }

  get beforeAttributeNameState(): BeforeAttributeNameState {
    return this.tokenizer.beforeAttributeNameState;
  }

  get attributeNameState(): AttributeNameState {
    return this.tokenizer.attributeNameState;
  }

  get afterAttributeNameState(): AfterAttributeNameState {
    return this.tokenizer.afterAttributeNameState;
  }

  get beforeAttributeValueState(): BeforeAttributeValueState {
    return this.tokenizer.beforeAttributeValueState;
  }

  get attributeValueDoubleQuotedState(): AttributeValueDoubleQuotedState {
    return this.tokenizer.attributeValueDoubleQuotedState;
  }

  get attributeValueSingleQuotedState(): AttributeValueSingleQuotedState {
    return this.tokenizer.attributeValueSingleQuotedState;
  }

  get attributeValueUnquotedState(): AttributeValueUnquotedState {
    return this.tokenizer.attributeValueUnquotedState;
  }

  get afterAttributeValueQuotedState(): AfterAttributeValueQuotedState {
    return this.tokenizer.afterAttributeValueQuotedState;
  }

  get selfClosingStartTagState(): SelfClosingStartTagState {
    return this.tokenizer.selfClosingStartTagState;
  }

  get bogusCommentState(): BogusCommentState {
    return this.tokenizer.bogusCommentState;
  }

  get markupDeclarationOpenState(): MarkupDeclarationOpenState {
    return this.tokenizer.markupDeclarationOpenState;
  }

  get commentStartState(): CommentStartState {
    return this.tokenizer.commentStartState;
  }

  get commentStartDashState(): CommentStartDashState {
    return this.tokenizer.commentStartDashState;
  }

  get commentState(): CommentState {
    return this.tokenizer.commentState;
  }

  get commentLessThanSignState(): CommentLessThanSignState {
    return this.tokenizer.commentLessThanSignState;
  }

  get commentLessThanSignBangState(): CommentLessThanSignBangState {
    return this.tokenizer.commentLessThanSignBangState;
  }

  get commentLessThanSignBangDashState(): CommentLessThanSignBangDashState {
    return this.tokenizer.commentLessThanSignBangDashState;
  }

  get commentLessThanSignBangDashDashState(): CommentLessThanSignBangDashDashState {
    return this.tokenizer.commentLessThanSignBangDashDashState;
  }

  get commentEndDashState(): CommentEndDashState {
    return this.tokenizer.commentEndDashState;
  }

  get commentEndState(): CommentEndState {
    return this.tokenizer.commentEndState;
  }

  get commentEndBangState(): CommentEndBangState {
    return this.tokenizer.commentEndBangState;
  }

  get doctypeState(): DOCTYPEState {
    return this.tokenizer.doctypeState;
  }

  get beforeDOCTYPENameState(): BeforeDOCTYPENameState {
    return this.tokenizer.beforeDOCTYPENameState;
  }

  get doctypeNameState(): DOCTYPENameState {
    return this.tokenizer.doctypeNameState;
  }

  get afterDOCTYPENameState(): AfterDOCTYPENameState {
    return this.tokenizer.afterDOCTYPENameState;
  }

  get afterDOCTYPEPublicKeywordState(): AfterDOCTYPEPublicKeywordState {
    return this.tokenizer.afterDOCTYPEPublicKeywordState;
  }

  get beforeDOCTYPEPublicIdentifierState(): BeforeDOCTYPEPublicIdentifierState {
    return this.tokenizer.beforeDOCTYPEPublicIdentifierState;
  }

  get doctypePublicIdentifierDoubleQuotedState(): DOCTYPEPublicIdentifierDoubleQuotedState {
    return this.tokenizer.doctypePublicIdentifierDoubleQuotedState;
  }

  get doctypePublicIdentifierSingleQuotedState(): DOCTYPEPublicIdentifierSingleQuotedState {
    return this.tokenizer.doctypePublicIdentifierSingleQuotedState;
  }

  get afterDOCTYPEPublicIdentifierState(): AfterDOCTYPEPublicIdentifierState {
    return this.tokenizer.afterDOCTYPEPublicIdentifierState;
  }

  get betweenDOCTYPEPublicAndSystemIdentifiersState(): BetweenDOCTYPEPublicAndSystemIdentifiersState {
    return this.tokenizer.betweenDOCTYPEPublicAndSystemIdentifiersState;
  }

  get afterDOCTYPESystemKeywordState(): AfterDOCTYPESystemKeywordState {
    return this.tokenizer.afterDOCTYPESystemKeywordState;
  }

  get beforeDOCTYPESystemIdentifierState(): BeforeDOCTYPESystemIdentifierState {
    return this.tokenizer.beforeDOCTYPESystemIdentifierState;
  }

  get doctypeSystemIdentifierDoubleQuotedState(): DOCTYPESystemIdentifierDoubleQuotedState {
    return this.tokenizer.doctypeSystemIdentifierDoubleQuotedState;
  }

  get doctypeSystemIdentifierSingleQuotedState(): DOCTYPESystemIdentifierSingleQuotedState {
    return this.tokenizer.doctypeSystemIdentifierSingleQuotedState;
  }

  get afterDOCTYPESystemIdentifierState(): AfterDOCTYPESystemIdentifierState {
    return this.tokenizer.afterDOCTYPESystemIdentifierState;
  }

  get bogusDOCTYPEState(): BogusDOCTYPEState {
    return this.tokenizer.bogusDOCTYPEState;
  }

  get cdataSectionState(): CDATASectionState {
    return this.tokenizer.cdataSectionState;
  }

  get cdataSectionBracketState(): CDATASectionBracketState {
    return this.tokenizer.cdataSectionBracketState;
  }

  get cdataSectionEndState(): CDATASectionEndState {
    return this.tokenizer.cdataSectionEndState;
  }

  get characterReferenceState(): CharacterReferenceState {
    return this.tokenizer.characterReferenceState;
  }

  get namedCharacterReferenceState(): NamedCharacterReferenceState {
    return this.tokenizer.namedCharacterReferenceState;
  }

  get ambiguousAmpersandState(): AmbiguousAmpersandState {
    return this.tokenizer.ambiguousAmpersandState;
  }

  get numericCharacterReferenceState(): NumericCharacterReferenceState {
    return this.tokenizer.numericCharacterReferenceState;
  }

  get hexadecimalCharacterReferenceStartState(): HexadecimalCharacterReferenceStartState {
    return this.tokenizer.hexadecimalCharacterReferenceStartState;
  }

  get decimalCharacterReferenceStartState(): DecimalCharacterReferenceStartState {
    return this.tokenizer.decimalCharacterReferenceStartState;
  }

  get hexadecimalCharacterReferenceState(): HexadecimalCharacterReferenceState {
    return this.tokenizer.hexadecimalCharacterReferenceState;
  }

  get decimalCharacterReferenceState(): DecimalCharacterReferenceState {
    return this.tokenizer.decimalCharacterReferenceState;
  }

  get numericCharacterReferenceEndState(): NumericCharacterReferenceEndState {
    return this.tokenizer.numericCharacterReferenceEndState;
  }

}
