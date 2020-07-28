export interface Attribute {
  name: string,
  value: string;
}

export interface StartTagToken {
  name: string;
  selfClosingFlag: 'set' | 'unset';
  attributes: Attribute[];
}
