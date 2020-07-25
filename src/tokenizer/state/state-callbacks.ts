import { State } from ".";

export interface StateCallbacks {
  onStateChange: (state: State) => void;
  onEmit: (character: string) => void;
}
