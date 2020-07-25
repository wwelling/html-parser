import { AbstractState } from "./abstract-state";

export class ScriptDataEscapeStartDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
