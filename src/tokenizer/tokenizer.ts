import { Buffer } from "./buffer";
import { getStates, State, States } from "./state";
import { CharacterToken } from "./token/character-token";
import { CommentToken } from "./token/comment-token";
import { DOCTYPEToken } from "./token/doctype-token";
import { EndTagToken } from "./token/end-tag-token";
import { StartTagToken } from "./token/start-tag-token";
import { TokenizerCallbacks } from "./tokenizer-callbacks";

export default class Tokenizer {

  callbacks: TokenizerCallbacks;

  buffer: Buffer;

  states: States;

  state: State;

  returnState: State;

  temporaryBuffer: string;

  characterReferenceCode: number;

  running: boolean;

  done: boolean;

  commentToken: CommentToken;

  doctypeToken: DOCTYPEToken;

  startTagToken: StartTagToken;

  endTagToken: EndTagToken;

  constructor(callbacks: TokenizerCallbacks) {
    this.callbacks = callbacks;
    this.buffer = new Buffer();

    this.states = getStates(this.buffer, {
      switchState: (state: State) => {
        this.state = state;
      },
      setReturnState: (returnState: State) => {
        this.returnState = returnState;
      },
      createCommentToken: (data: string) => {
        this.commentToken = { data };
      },
      createDOCTYPEToken: () => {
        this.doctypeToken = { forceQuirks: 'off' };
      },
      createStartTagToken: (name: string) => {
        this.startTagToken = { name, attributes: [], selfClosing: 'unset' };
      },
      createEndTagToken: (name: string) => {
        this.endTagToken = { name };
      },
      startNewTagAttribute: (name: string, value: string) => {
        this.startTagToken.attributes.push({ name, value });
      },
      setDOCTYPETokenName: (name: string) => {
        this.doctypeToken.name = name;
      },
      setDOCTYPETokenSystemIdentifier: (publicIdentifier: string) => {
        this.doctypeToken.publicIdentifier = publicIdentifier;
      },
      setDOCTYPETokenPublicIdentifier: (systemIdentifier: string) => {
        this.doctypeToken.systemIdentifier = systemIdentifier;
      },
      setDOCTYPETokenForceQuirks: (forceQuirks: 'on' | 'off') => {
        this.doctypeToken.forceQuirks = forceQuirks;
      },
      emitCharacterToken: (token: CharacterToken) => {
        callbacks.emitCharacterToken(token);
      },
      emitCommentToken: () => {
        callbacks.emitCommentToken(this.commentToken);
      },
      emitDOCTYPEToken: () => {
        callbacks.emitDOCTYPEToken(this.doctypeToken);
      },
      emitStartTagToken: () => {
        callbacks.emitStartTagToken(this.startTagToken);
      },
      emitEndTagToken: () => {
        callbacks.emitEndTagToken(this.endTagToken);
      },
      emitEndOfFileToken: () => {
        callbacks.emitEndOfFileToken();
      },
      setTemporaryBuffer: (data: string) => {
        this.temporaryBuffer = data;
      },
      appendToTemporaryBuffer: (data: string) => {
        this.temporaryBuffer += data;
      },
      reconsumeInState: (character: string, state: State) => {
        this.state = state;
        this.state.consume(character);
      },
      reconsumeInReturnState: (character: string) => {
        this.state = this.returnState;
        this.state.consume(character);
      },
      setCharacterReferenceCode: (characterReferenceCode: number) => {
        this.characterReferenceCode = characterReferenceCode;
      },
      flushCodePoints: () => {
        // When a state says to flush code points consumed as a character reference, it means that for each code point in the temporary buffer (in the order they were added to the buffer)
        // user agent must append the code point from the buffer to the current attribute's value if the character reference was consumed as part of an attribute, or emit the code point as a
        // character token otherwise.
      }
    });

    this.state = this.states.dataState;
    this.temporaryBuffer = '';
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
