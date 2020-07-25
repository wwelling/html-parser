import { AbstractState } from "./abstract-state";

export class ScriptDataDoubleEscapedDashDashState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
