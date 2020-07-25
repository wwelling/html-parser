import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
