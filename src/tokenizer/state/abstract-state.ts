import { AfterAttributeNameState, AfterAttributeValueQuotedState, AfterDOCTYPENameState, AfterDOCTYPEPublicIdentifierState, AfterDOCTYPEPublicKeywordState, AfterDOCTYPESystemIdentifierState, AfterDOCTYPESystemKeywordState, AmbiguousAmpersandState, AttributeNameState, AttributeValueDoubleQuotedState, AttributeValueSingleQuotedState, AttributeValueUnquotedState, BeforeAttributeNameState, BeforeAttributeValueState, BeforeDOCTYPENameState, BeforeDOCTYPEPublicIdentifierState, BeforeDOCTYPESystemIdentifierState, BetweenDOCTYPEPublicAndSystemIdentifiersState, BogusCommentState, BogusDOCTYPEState, CDATASectionBracketState, CDATASectionEndState, CDATASectionState, CharacterReferenceState, CommentEndBangState, CommentEndDashState, CommentEndState, CommentLessThanSignBangDashDashState, CommentLessThanSignBangDashState, CommentLessThanSignBangState, CommentLessThanSignState, CommentStartDashState, CommentStartState, CommentState, DataState, DecimalCharacterReferenceStartState, DecimalCharacterReferenceState, DOCTYPENameState, DOCTYPEPublicIdentifierDoubleQuotedState, DOCTYPEPublicIdentifierSingleQuotedState, DOCTYPEState, DOCTYPESystemIdentifierDoubleQuotedState, DOCTYPESystemIdentifierSingleQuotedState, EndTagOpenState, HexadecimalCharacterReferenceStartState, HexadecimalCharacterReferenceState, MarkupDeclarationOpenState, NamedCharacterReferenceState, NumericCharacterReferenceEndState, NumericCharacterReferenceState, PLAINTEXTState, RAWTEXTEndTagNameState, RAWTEXTEndTagOpenState, RAWTEXTLessThanSignState, RAWTEXTState, RCDATAEndTagNameState, RCDATAEndTagOpenState, RCDATALessThanSignState, RCDATAState, ScriptDataDoubleEscapedDashDashState, ScriptDataDoubleEscapedDashState, ScriptDataDoubleEscapedLessThanSignState, ScriptDataDoubleEscapedState, ScriptDataDoubleEscapeEndState, ScriptDataDoubleEscapeStartState, ScriptDataEndTagNameState, ScriptDataEndTagOpenState, ScriptDataEscapedDashDashState, ScriptDataEscapedDashState, ScriptDataEscapedEndTagNameState, ScriptDataEscapedEndTagOpenState, ScriptDataEscapedLessThanSignState, ScriptDataEscapedState, ScriptDataEscapeStartDashState, ScriptDataEscapeStartState, ScriptDataLessThanSignState, ScriptDataState, SelfClosingStartTagState, State, TagNameState, TagOpenState } from ".";
import { Buffer } from "../buffer";
import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from "../token";
import { Attribute } from '../token/start-tag-token';
import Tokenizer from "../tokenizer";

export abstract class AbstractState implements State {

  private readonly _tokenizer: Tokenizer;

  constructor(tokenizer: Tokenizer) {
    this._tokenizer = tokenizer;
  }

  abstract consume(character: string): void;

  switchState(state: State): void {
    this._tokenizer.state = state;
  }

  setReturnState(returnState: State): void {
    this._tokenizer.returnState = returnState;
  }

  createCommentToken(data = ''): void {
    this._tokenizer.commentToken = { data };
  }

  createDOCTYPEToken(): void {
    this._tokenizer.doctypeToken = { forceQuirks: 'off' };
  }

  createStartTagToken(name = ''): void {
    this._tokenizer.startTagToken = { name, attributes: [], selfClosing: 'unset' };
  }

  createEndTagToken(name = ''): void {
    this._tokenizer.endTagToken = { name };
  }

  startNewTagAttribute(name = '', value = ''): void {
    this._tokenizer.startTagToken.attributes.push({ name, value });
  }

  emitCharacterToken(token: CharacterToken): void {
    this._tokenizer.callbacks.emitCharacterToken(token);
  }

  emitCommentToken(): void {
    this._tokenizer.callbacks.emitCommentToken(this._tokenizer.commentToken);
    delete this._tokenizer.commentToken;
  }

  emitDOCTYPEToken(): void {
    this._tokenizer.callbacks.emitDOCTYPEToken(this._tokenizer.doctypeToken);
    delete this._tokenizer.doctypeToken;
  }

  emitCurrentTagToken(): void {
    if (this._tokenizer.startTagToken !== undefined) {
      this.emitStartTagToken();
    } else if (this._tokenizer.endTagToken !== undefined) {
      this.emitEndTagToken();
    } else {
      console.warn('there is no tag token prepared');
    }
  }

  emitEndOfFileToken(): void {
    this._tokenizer.callbacks.emitEndOfFileToken();
  }

  isAppropriateEndTagToken(): boolean {
    return this._tokenizer.lastEmmitedStartTagToken !== undefined
      ? this._tokenizer.lastEmmitedStartTagToken.name === this._tokenizer.endTagToken.name
      : false;
  }

  reconsumeInState(character: string, state: State): void {
    this._tokenizer.state = state;
    this._tokenizer.state.consume(character);
  }

  reconsumeInReturnState(character: string): void {
    this._tokenizer.state = this._tokenizer.returnState;
    this._tokenizer.state.consume(character);
  }

  flushCodePoints(): void {
    // TODO
  }

  isReturnState(...states: State[]): boolean {
    for (const state of states) {
      if (this._tokenizer.returnState === state) {
        return true;
      }
    }
    return false;
  }

  private emitStartTagToken(): void {
    this._tokenizer.callbacks.emitStartTagToken(this._tokenizer.startTagToken);
    this._tokenizer.lastEmmitedStartTagToken = this._tokenizer.startTagToken;
    delete this._tokenizer.startTagToken;
  }

  private emitEndTagToken(): void {
    this._tokenizer.callbacks.emitEndTagToken(this._tokenizer.endTagToken);
    delete this._tokenizer.endTagToken;
  }

  get buffer(): Buffer {
    return this._tokenizer.buffer;
  }

  get temporaryBuffer(): string {
    return this._tokenizer.temporaryBuffer;
  }

  set temporaryBuffer(temporaryBuffer: string) {
    this._tokenizer.temporaryBuffer = temporaryBuffer;
  }

  get characterReferenceCode(): number {
    return this._tokenizer.characterReferenceCode;
  }

  get commentToken(): CommentToken {
    return this._tokenizer.commentToken;
  }

  get doctypeToken(): DOCTYPEToken {
    return this._tokenizer.doctypeToken;
  }

  get startTagToken(): StartTagToken {
    return this._tokenizer.startTagToken;
  }

  get endTagToken(): EndTagToken {
    return this._tokenizer.endTagToken;
  }

  get currentTagAttribute(): Attribute {
    const index = this._tokenizer.startTagToken.attributes.length - 1;
    return this._tokenizer.startTagToken.attributes[index];
  }

  get dataState(): DataState {
    return this._tokenizer.dataState;
  }

  get rcdataState(): RCDATAState {
    return this._tokenizer.rcdataState;
  }

  get rawTextState(): RAWTEXTState {
    return this._tokenizer.rawTextState;
  }

  get scriptDataState(): ScriptDataState {
    return this._tokenizer.scriptDataState;
  }

  get plainTextState(): PLAINTEXTState {
    return this._tokenizer.plainTextState;
  }

  get tagOpenState(): TagOpenState {
    return this._tokenizer.tagOpenState;
  }

  get endTagOpenState(): EndTagOpenState {
    return this._tokenizer.endTagOpenState;
  }

  get tagNameState(): TagNameState {
    return this._tokenizer.tagNameState;
  }

  get rcdataLessThanSignState(): RCDATALessThanSignState {
    return this._tokenizer.rcdataLessThanSignState;
  }

  get rcdataEndTagOpenState(): RCDATAEndTagOpenState {
    return this._tokenizer.rcdataEndTagOpenState;
  }

  get rcdataEndTagNameState(): RCDATAEndTagNameState {
    return this._tokenizer.rcdataEndTagNameState;
  }

  get rawTextLessThanSignState(): RAWTEXTLessThanSignState {
    return this._tokenizer.rawTextLessThanSignState;
  }

  get rawTextEndTagOpenState(): RAWTEXTEndTagOpenState {
    return this._tokenizer.rawTextEndTagOpenState;
  }

  get rawTextEndTagNameState(): RAWTEXTEndTagNameState {
    return this._tokenizer.rawTextEndTagNameState;
  }

  get scriptDataLessThanSignState(): ScriptDataLessThanSignState {
    return this._tokenizer.scriptDataLessThanSignState;
  }

  get scriptDataEndTagOpenState(): ScriptDataEndTagOpenState {
    return this._tokenizer.scriptDataEndTagOpenState;
  }

  get scriptDataEndTagNameState(): ScriptDataEndTagNameState {
    return this._tokenizer.scriptDataEndTagNameState;
  }

  get scriptDataEscapeStartState(): ScriptDataEscapeStartState {
    return this._tokenizer.scriptDataEscapeStartState;
  }

  get scriptDataEscapeStartDashState(): ScriptDataEscapeStartDashState {
    return this._tokenizer.scriptDataEscapeStartDashState;
  }

  get scriptDataEscapedState(): ScriptDataEscapedState {
    return this._tokenizer.scriptDataEscapedState;
  }

  get scriptDataEscapedDashState(): ScriptDataEscapedDashState {
    return this._tokenizer.scriptDataEscapedDashState;
  }

  get scriptDataEscapedDashDashState(): ScriptDataEscapedDashDashState {
    return this._tokenizer.scriptDataEscapedDashDashState;
  }

  get scriptDataEscapedLessThanSignState(): ScriptDataEscapedLessThanSignState {
    return this._tokenizer.scriptDataEscapedLessThanSignState;
  }

  get scriptDataEscapedEndTagOpenState(): ScriptDataEscapedEndTagOpenState {
    return this._tokenizer.scriptDataEscapedEndTagOpenState;
  }

  get scriptDataEscapedEndTagNameState(): ScriptDataEscapedEndTagNameState {
    return this._tokenizer.scriptDataEscapedEndTagNameState;
  }

  get scriptDataDoubleEscapeStartState(): ScriptDataDoubleEscapeStartState {
    return this._tokenizer.scriptDataDoubleEscapeStartState;
  }

  get scriptDataDoubleEscapedState(): ScriptDataDoubleEscapedState {
    return this._tokenizer.scriptDataDoubleEscapedState;
  }

  get scriptDataDoubleEscapedDashState(): ScriptDataDoubleEscapedDashState {
    return this._tokenizer.scriptDataDoubleEscapedDashState;
  }

  get scriptDataDoubleEscapedDashDashState(): ScriptDataDoubleEscapedDashDashState {
    return this._tokenizer.scriptDataDoubleEscapedDashDashState;
  }

  get scriptDataDoubleEscapedLessThanSignState(): ScriptDataDoubleEscapedLessThanSignState {
    return this._tokenizer.scriptDataDoubleEscapedLessThanSignState;
  }

  get scriptDataDoubleEscapeEndState(): ScriptDataDoubleEscapeEndState {
    return this._tokenizer.scriptDataDoubleEscapeEndState;
  }

  get beforeAttributeNameState(): BeforeAttributeNameState {
    return this._tokenizer.beforeAttributeNameState;
  }

  get attributeNameState(): AttributeNameState {
    return this._tokenizer.attributeNameState;
  }

  get afterAttributeNameState(): AfterAttributeNameState {
    return this._tokenizer.afterAttributeNameState;
  }

  get beforeAttributeValueState(): BeforeAttributeValueState {
    return this._tokenizer.beforeAttributeValueState;
  }

  get attributeValueDoubleQuotedState(): AttributeValueDoubleQuotedState {
    return this._tokenizer.attributeValueDoubleQuotedState;
  }

  get attributeValueSingleQuotedState(): AttributeValueSingleQuotedState {
    return this._tokenizer.attributeValueSingleQuotedState;
  }

  get attributeValueUnquotedState(): AttributeValueUnquotedState {
    return this._tokenizer.attributeValueUnquotedState;
  }

  get afterAttributeValueQuotedState(): AfterAttributeValueQuotedState {
    return this._tokenizer.afterAttributeValueQuotedState;
  }

  get selfClosingStartTagState(): SelfClosingStartTagState {
    return this._tokenizer.selfClosingStartTagState;
  }

  get bogusCommentState(): BogusCommentState {
    return this._tokenizer.bogusCommentState;
  }

  get markupDeclarationOpenState(): MarkupDeclarationOpenState {
    return this._tokenizer.markupDeclarationOpenState;
  }

  get commentStartState(): CommentStartState {
    return this._tokenizer.commentStartState;
  }

  get commentStartDashState(): CommentStartDashState {
    return this._tokenizer.commentStartDashState;
  }

  get commentState(): CommentState {
    return this._tokenizer.commentState;
  }

  get commentLessThanSignState(): CommentLessThanSignState {
    return this._tokenizer.commentLessThanSignState;
  }

  get commentLessThanSignBangState(): CommentLessThanSignBangState {
    return this._tokenizer.commentLessThanSignBangState;
  }

  get commentLessThanSignBangDashState(): CommentLessThanSignBangDashState {
    return this._tokenizer.commentLessThanSignBangDashState;
  }

  get commentLessThanSignBangDashDashState(): CommentLessThanSignBangDashDashState {
    return this._tokenizer.commentLessThanSignBangDashDashState;
  }

  get commentEndDashState(): CommentEndDashState {
    return this._tokenizer.commentEndDashState;
  }

  get commentEndState(): CommentEndState {
    return this._tokenizer.commentEndState;
  }

  get commentEndBangState(): CommentEndBangState {
    return this._tokenizer.commentEndBangState;
  }

  get doctypeState(): DOCTYPEState {
    return this._tokenizer.doctypeState;
  }

  get beforeDOCTYPENameState(): BeforeDOCTYPENameState {
    return this._tokenizer.beforeDOCTYPENameState;
  }

  get doctypeNameState(): DOCTYPENameState {
    return this._tokenizer.doctypeNameState;
  }

  get afterDOCTYPENameState(): AfterDOCTYPENameState {
    return this._tokenizer.afterDOCTYPENameState;
  }

  get afterDOCTYPEPublicKeywordState(): AfterDOCTYPEPublicKeywordState {
    return this._tokenizer.afterDOCTYPEPublicKeywordState;
  }

  get beforeDOCTYPEPublicIdentifierState(): BeforeDOCTYPEPublicIdentifierState {
    return this._tokenizer.beforeDOCTYPEPublicIdentifierState;
  }

  get doctypePublicIdentifierDoubleQuotedState(): DOCTYPEPublicIdentifierDoubleQuotedState {
    return this._tokenizer.doctypePublicIdentifierDoubleQuotedState;
  }

  get doctypePublicIdentifierSingleQuotedState(): DOCTYPEPublicIdentifierSingleQuotedState {
    return this._tokenizer.doctypePublicIdentifierSingleQuotedState;
  }

  get afterDOCTYPEPublicIdentifierState(): AfterDOCTYPEPublicIdentifierState {
    return this._tokenizer.afterDOCTYPEPublicIdentifierState;
  }

  get betweenDOCTYPEPublicAndSystemIdentifiersState(): BetweenDOCTYPEPublicAndSystemIdentifiersState {
    return this._tokenizer.betweenDOCTYPEPublicAndSystemIdentifiersState;
  }

  get afterDOCTYPESystemKeywordState(): AfterDOCTYPESystemKeywordState {
    return this._tokenizer.afterDOCTYPESystemKeywordState;
  }

  get beforeDOCTYPESystemIdentifierState(): BeforeDOCTYPESystemIdentifierState {
    return this._tokenizer.beforeDOCTYPESystemIdentifierState;
  }

  get doctypeSystemIdentifierDoubleQuotedState(): DOCTYPESystemIdentifierDoubleQuotedState {
    return this._tokenizer.doctypeSystemIdentifierDoubleQuotedState;
  }

  get doctypeSystemIdentifierSingleQuotedState(): DOCTYPESystemIdentifierSingleQuotedState {
    return this._tokenizer.doctypeSystemIdentifierSingleQuotedState;
  }

  get afterDOCTYPESystemIdentifierState(): AfterDOCTYPESystemIdentifierState {
    return this._tokenizer.afterDOCTYPESystemIdentifierState;
  }

  get bogusDOCTYPEState(): BogusDOCTYPEState {
    return this._tokenizer.bogusDOCTYPEState;
  }

  get cdataSectionState(): CDATASectionState {
    return this._tokenizer.cdataSectionState;
  }

  get cdataSectionBracketState(): CDATASectionBracketState {
    return this._tokenizer.cdataSectionBracketState;
  }

  get cdataSectionEndState(): CDATASectionEndState {
    return this._tokenizer.cdataSectionEndState;
  }

  get characterReferenceState(): CharacterReferenceState {
    return this._tokenizer.characterReferenceState;
  }

  get namedCharacterReferenceState(): NamedCharacterReferenceState {
    return this._tokenizer.namedCharacterReferenceState;
  }

  get ambiguousAmpersandState(): AmbiguousAmpersandState {
    return this._tokenizer.ambiguousAmpersandState;
  }

  get numericCharacterReferenceState(): NumericCharacterReferenceState {
    return this._tokenizer.numericCharacterReferenceState;
  }

  get hexadecimalCharacterReferenceStartState(): HexadecimalCharacterReferenceStartState {
    return this._tokenizer.hexadecimalCharacterReferenceStartState;
  }

  get decimalCharacterReferenceStartState(): DecimalCharacterReferenceStartState {
    return this._tokenizer.decimalCharacterReferenceStartState;
  }

  get hexadecimalCharacterReferenceState(): HexadecimalCharacterReferenceState {
    return this._tokenizer.hexadecimalCharacterReferenceState;
  }

  get decimalCharacterReferenceState(): DecimalCharacterReferenceState {
    return this._tokenizer.decimalCharacterReferenceState;
  }

  get numericCharacterReferenceEndState(): NumericCharacterReferenceEndState {
    return this._tokenizer.numericCharacterReferenceEndState;
  }

}
