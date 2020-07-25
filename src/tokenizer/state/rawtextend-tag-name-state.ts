import { AbstractState } from "./abstract-state";

export class RAWTEXTEndTagNameState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
