import { AbstractState } from "./abstract-state";

export class ScriptDataEscapedDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
