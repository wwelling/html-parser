import { getStates, State, States } from "./state";
import { CharacterToken } from "./token/character-token";
import { CommentToken } from "./token/comment-token";
import { DOCTYPEToken } from "./token/doctype-token";
import { EndTagToken } from "./token/end-tag-token";
import { StartTagToken } from "./token/start-tag-token";
import { TokenizerCallbacks } from "./tokenizer-callbacks";

export default class Tokenizer {

  states: States;

  callbacks: TokenizerCallbacks;

  state: State;

  returnState: State;

  buffer: string;

  index: number;

  temporaryBuffer: string;

  running: boolean;

  done: boolean;

  characterToken: CharacterToken;

  commentToken: CommentToken;

  doctypeToken: DOCTYPEToken;

  endTagToken: EndTagToken;

  startTagToken: StartTagToken;

  constructor(callbacks: TokenizerCallbacks) {

    this.states = getStates({
      switchState: (state: State) => {
        this.state = state;
      },
      setReturnState: (returnState: State) => {
        this.returnState = returnState;
      },
      createCharacterToken: (data: string) => {
        this.characterToken = { data };
      },
      createCommentToken: (data: string) => {
        this.commentToken = { data };
      },
      createDOCTYPEToken: () => {
        this.doctypeToken = { forceQuirksFlag: 'off' };
      },
      createEndTagToken: (name: string) => {
        this.endTagToken = { name };
      },
      createStartTagToken: (name: string) => {
        this.startTagToken = { name, attributes: {}, selfClosingFlag: 'unset' };
      },
      emitCharacterToken: (token: CharacterToken) => {
        //
      },
      emitCommentToken: (token: CommentToken) => {
        //
      },
      emitDOCTYPEToken: (token: DOCTYPEToken) => {
        //
      },
      emitEndOfFileToken: () => {
        //
      },
      emitEndTagToken: (token: EndTagToken) => {
        //
      },
      emitStartTagToken: (token: StartTagToken) => {
        //
      },
      setTemporaryBuffer: (data: string) => {
        this.temporaryBuffer = data;
      },
      appendToTemporaryBuffer: (data: string) => {
        this.temporaryBuffer += data;
      },
      reconsume: (character: string, state: State) => {
        if (state) {
          state.consume(character);
        } else {
          this.state.consume(character);
        }
      },
      reconsumeInReturnState: (character: string) => {
        this.returnState.consume(character);
      },
      flushCodePoints: () => {
        // When a state says to flush code points consumed as a character reference, it means that for each code point in the temporary buffer (in the order they were added to the buffer)
        // user agent must append the code point from the buffer to the current attribute's value if the character reference was consumed as part of an attribute, or emit the code point as a
        // character token otherwise.
      }
    });

    this.callbacks = callbacks;
    this.state = this.states.dataState;
    this.buffer = '';
    this.index = 0;
    this.temporaryBuffer = '';
    this.running = true;
    this.done = false;
  }

  write(chunk: string): void {
    this.buffer += chunk;
    this.parse();
  }

  parse(): void {
    while (this.index < this.buffer.length && this.running) {
      const character = this.buffer.charAt(this.index++);
      this.state.consume(character);
    }
  }

  pause(): void {
    this.running = false;
  }

  resume(): void {
    this.running = true;
    if (this.index < this.buffer.length) {
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
