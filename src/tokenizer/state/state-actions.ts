import { State } from ".";
import Token from "../token";

export interface StateActions {
  switchState: (state: State) => void;
  setReturnState: (returnState: State) => void;
  emit: (token: Token) => void;
}
