import { ampersand, lessThanSign, nullCharacter } from "../characters";
import { AbstractState } from "./abstract-state";

export class DataState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      case ampersand:
        break;
      case lessThanSign:
        break;
      case nullCharacter: // This is an unexpected-null-character parse error
      default:
        break;
    }
  }
}
