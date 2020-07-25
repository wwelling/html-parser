import { AbstractState } from "./abstract-state";

export class ScriptDataDoubleEscapedDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
