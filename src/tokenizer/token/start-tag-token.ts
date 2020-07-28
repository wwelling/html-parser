export interface Attribute {
  name: string,
  value: string;
}

export interface StartTagToken {
  name: string;
  selfClosing: 'set' | 'unset';
  attributes: Attribute[];
}
