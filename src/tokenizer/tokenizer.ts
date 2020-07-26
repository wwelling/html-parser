import { getStates, State, States } from "./state";
import Token from "./token";
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

  constructor(callbacks: TokenizerCallbacks) {

    this.states = getStates({
      switchState: (state: State) => {
        this.state = state;
      },
      setReturnState: (returnState: State) => {
        this.returnState = returnState;
      },
      emit: (token: Token) => {
        // console.log(token);
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
