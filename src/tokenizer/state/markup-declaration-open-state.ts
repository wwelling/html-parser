import { AbstractState } from "./abstract-state";

export class MarkupDeclarationOpenState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
