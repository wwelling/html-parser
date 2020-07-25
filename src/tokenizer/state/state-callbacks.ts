import { State } from ".";

export interface StateCallbacks {
  onStateChange: (state: State) => void;
  onReturnStateChange: (returnState: State) => void;
  onEmit: (character: string) => void;
}
