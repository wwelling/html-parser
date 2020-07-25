import { AbstractState } from "./abstract-state";

export class RAWTEXTEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
