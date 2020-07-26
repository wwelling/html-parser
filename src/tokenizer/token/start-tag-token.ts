export interface StartTagToken {
  name: string;
  selfClosingFlag: 'set' | 'unset';
  attributes: { [name: string]: string };
}
