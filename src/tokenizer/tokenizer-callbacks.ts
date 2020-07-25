import Token from "./token";
export interface TokenizerCallbacks {
  onEmit: (token: Token) => void;
  onEnd: () => void;
}
