import { Buffer } from "./buffer";
import { AfterAttributeNameState, AfterAttributeValueQuotedState, AfterDOCTYPENameState, AfterDOCTYPEPublicIdentifierState, AfterDOCTYPEPublicKeywordState, AfterDOCTYPESystemIdentifierState, AfterDOCTYPESystemKeywordState, AmbiguousAmpersandState, AttributeNameState, AttributeValueDoubleQuotedState, AttributeValueSingleQuotedState, AttributeValueUnquotedState, BeforeAttributeNameState, BeforeAttributeValueState, BeforeDOCTYPENameState, BeforeDOCTYPEPublicIdentifierState, BeforeDOCTYPESystemIdentifierState, BetweenDOCTYPEPublicAndSystemIdentifiersState, BogusCommentState, BogusDOCTYPEState, CDATASectionBracketState, CDATASectionEndState, CDATASectionState, CharacterReferenceState, CommentEndBangState, CommentEndDashState, CommentEndState, CommentLessThanSignBangDashDashState, CommentLessThanSignBangDashState, CommentLessThanSignBangState, CommentLessThanSignState, CommentStartDashState, CommentStartState, CommentState, DataState, DecimalCharacterReferenceStartState, DecimalCharacterReferenceState, DOCTYPENameState, DOCTYPEPublicIdentifierDoubleQuotedState, DOCTYPEPublicIdentifierSingleQuotedState, DOCTYPEState, DOCTYPESystemIdentifierDoubleQuotedState, DOCTYPESystemIdentifierSingleQuotedState, EndTagOpenState, HexadecimalCharacterReferenceStartState, HexadecimalCharacterReferenceState, MarkupDeclarationOpenState, NamedCharacterReferenceState, NumericCharacterReferenceEndState, NumericCharacterReferenceState, PLAINTEXTState, RAWTEXTEndTagNameState, RAWTEXTEndTagOpenState, RAWTEXTLessThanSignState, RAWTEXTState, RCDATAEndTagNameState, RCDATAEndTagOpenState, RCDATALessThanSignState, RCDATAState, ScriptDataDoubleEscapedDashDashState, ScriptDataDoubleEscapedDashState, ScriptDataDoubleEscapedLessThanSignState, ScriptDataDoubleEscapedState, ScriptDataDoubleEscapeEndState, ScriptDataDoubleEscapeStartState, ScriptDataEndTagNameState, ScriptDataEndTagOpenState, ScriptDataEscapedDashDashState, ScriptDataEscapedDashState, ScriptDataEscapedEndTagNameState, ScriptDataEscapedEndTagOpenState, ScriptDataEscapedLessThanSignState, ScriptDataEscapedState, ScriptDataEscapeStartDashState, ScriptDataEscapeStartState, ScriptDataLessThanSignState, ScriptDataState, SelfClosingStartTagState, State, TagNameState, TagOpenState } from "./state";
import { CommentToken } from "./token/comment-token";
import { DOCTYPEToken } from "./token/doctype-token";
import { EndTagToken } from "./token/end-tag-token";
import { StartTagToken } from "./token/start-tag-token";
import { TokenizerCallbacks } from "./tokenizer-callbacks";

export default class Tokenizer {

  dataState = new DataState(this);
  rcdataState = new RCDATAState(this);
  rawTextState = new RAWTEXTState(this);
  scriptDataState = new ScriptDataState(this);
  plainTextState = new PLAINTEXTState(this);
  tagOpenState = new TagOpenState(this);
  endTagOpenState = new EndTagOpenState(this);
  tagNameState = new TagNameState(this);
  rcdataLessThanSignState = new RCDATALessThanSignState(this);
  rcdataEndTagOpenState = new RCDATAEndTagOpenState(this);
  rcdataEndTagNameState = new RCDATAEndTagNameState(this);
  rawTextLessThanSignState = new RAWTEXTLessThanSignState(this);
  rawTextEndTagOpenState = new RAWTEXTEndTagOpenState(this);
  rawTextEndTagNameState = new RAWTEXTEndTagNameState(this);
  scriptDataLessThanSignState = new ScriptDataLessThanSignState(this);
  scriptDataEndTagOpenState = new ScriptDataEndTagOpenState(this);
  scriptDataEndTagNameState = new ScriptDataEndTagNameState(this);
  scriptDataEscapeStartState = new ScriptDataEscapeStartState(this);
  scriptDataEscapeStartDashState = new ScriptDataEscapeStartDashState(this);
  scriptDataEscapedState = new ScriptDataEscapedState(this);
  scriptDataEscapedDashState = new ScriptDataEscapedDashState(this);
  scriptDataEscapedDashDashState = new ScriptDataEscapedDashDashState(this);
  scriptDataEscapedLessThanSignState = new ScriptDataEscapedLessThanSignState(this);
  scriptDataEscapedEndTagOpenState = new ScriptDataEscapedEndTagOpenState(this);
  scriptDataEscapedEndTagNameState = new ScriptDataEscapedEndTagNameState(this);
  scriptDataDoubleEscapeStartState = new ScriptDataDoubleEscapeStartState(this);
  scriptDataDoubleEscapedState = new ScriptDataDoubleEscapedState(this);
  scriptDataDoubleEscapedDashState = new ScriptDataDoubleEscapedDashState(this);
  scriptDataDoubleEscapedDashDashState = new ScriptDataDoubleEscapedDashDashState(this);
  scriptDataDoubleEscapedLessThanSignState = new ScriptDataDoubleEscapedLessThanSignState(this);
  scriptDataDoubleEscapeEndState = new ScriptDataDoubleEscapeEndState(this);
  beforeAttributeNameState = new BeforeAttributeNameState(this);
  attributeNameState = new AttributeNameState(this);
  afterAttributeNameState = new AfterAttributeNameState(this);
  beforeAttributeValueState = new BeforeAttributeValueState(this);
  attributeValueDoubleQuotedState = new AttributeValueDoubleQuotedState(this);
  attributeValueSingleQuotedState = new AttributeValueSingleQuotedState(this);
  attributeValueUnquotedState = new AttributeValueUnquotedState(this);
  afterAttributeValueQuotedState = new AfterAttributeValueQuotedState(this);
  selfClosingStartTagState = new SelfClosingStartTagState(this);
  bogusCommentState = new BogusCommentState(this);
  markupDeclarationOpenState = new MarkupDeclarationOpenState(this);
  commentStartState = new CommentStartState(this);
  commentStartDashState = new CommentStartDashState(this);
  commentState = new CommentState(this);
  commentLessThanSignState = new CommentLessThanSignState(this);
  commentLessThanSignBangState = new CommentLessThanSignBangState(this);
  commentLessThanSignBangDashState = new CommentLessThanSignBangDashState(this);
  commentLessThanSignBangDashDashState = new CommentLessThanSignBangDashDashState(this);
  commentEndDashState = new CommentEndDashState(this);
  commentEndState = new CommentEndState(this);
  commentEndBangState = new CommentEndBangState(this);
  doctypeState = new DOCTYPEState(this);
  beforeDOCTYPENameState = new BeforeDOCTYPENameState(this);
  doctypeNameState = new DOCTYPENameState(this);
  afterDOCTYPENameState = new AfterDOCTYPENameState(this);
  afterDOCTYPEPublicKeywordState = new AfterDOCTYPEPublicKeywordState(this);
  beforeDOCTYPEPublicIdentifierState = new BeforeDOCTYPEPublicIdentifierState(this);
  doctypePublicIdentifierDoubleQuotedState = new DOCTYPEPublicIdentifierDoubleQuotedState(this);
  doctypePublicIdentifierSingleQuotedState = new DOCTYPEPublicIdentifierSingleQuotedState(this);
  afterDOCTYPEPublicIdentifierState = new AfterDOCTYPEPublicIdentifierState(this);
  betweenDOCTYPEPublicAndSystemIdentifiersState = new BetweenDOCTYPEPublicAndSystemIdentifiersState(this);
  afterDOCTYPESystemKeywordState = new AfterDOCTYPESystemKeywordState(this);
  beforeDOCTYPESystemIdentifierState = new BeforeDOCTYPESystemIdentifierState(this);
  doctypeSystemIdentifierDoubleQuotedState = new DOCTYPESystemIdentifierDoubleQuotedState(this);
  doctypeSystemIdentifierSingleQuotedState = new DOCTYPESystemIdentifierSingleQuotedState(this);
  afterDOCTYPESystemIdentifierState = new AfterDOCTYPESystemIdentifierState(this);
  bogusDOCTYPEState = new BogusDOCTYPEState(this);
  cdataSectionState = new CDATASectionState(this);
  cdataSectionBracketState = new CDATASectionBracketState(this);
  cdataSectionEndState = new CDATASectionEndState(this);
  characterReferenceState = new CharacterReferenceState(this);
  namedCharacterReferenceState = new NamedCharacterReferenceState(this);
  ambiguousAmpersandState = new AmbiguousAmpersandState(this);
  numericCharacterReferenceState = new NumericCharacterReferenceState(this);
  hexadecimalCharacterReferenceStartState = new HexadecimalCharacterReferenceStartState(this);
  decimalCharacterReferenceStartState = new DecimalCharacterReferenceStartState(this);
  hexadecimalCharacterReferenceState = new HexadecimalCharacterReferenceState(this);
  decimalCharacterReferenceState = new DecimalCharacterReferenceState(this);
  numericCharacterReferenceEndState = new NumericCharacterReferenceEndState(this);

  callbacks: TokenizerCallbacks;

  buffer: Buffer;

  state: State;

  returnState: State;

  temporaryBuffer: string;

  characterReferenceCode: number;

  commentToken: CommentToken;

  doctypeToken: DOCTYPEToken;

  startTagToken: StartTagToken;

  lastEmmitedStartTagToken: StartTagToken;

  endTagToken: EndTagToken;

  running: boolean;

  done: boolean;

  constructor(callbacks: TokenizerCallbacks) {
    this.callbacks = callbacks;
    this.buffer = new Buffer();
    this.state = this.dataState;
    this.running = true;
    this.done = false;
  }

  write(chunk: string): void {
    this.buffer.write(chunk);
    this.parse();
  }

  parse(): void {
    while (this.buffer.hasData() && this.running) {
      this.state.consume(this.buffer.next());
    }
  }

  pause(): void {
    this.running = false;
  }

  resume(): void {
    this.running = true;
    if (this.buffer.hasData()) {
      this.parse();
    }
    if (this.done) {
      this.finish();
    }
  }

  end(chunk?: string): void {
    if (this.done) {
      throw new Error('Cannot call end when tokenizer is already done!');
    }
    if (chunk) {
      this.write(chunk);
    }
    this.done = true;
    if (this.running) {
      this.finish();
    }
  }

  finish(): void {
    this.callbacks.onEnd();
  }

}
