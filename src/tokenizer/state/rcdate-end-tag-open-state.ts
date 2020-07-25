import { AbstractState } from "./abstract-state";

export class RCDATAEndTagOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
