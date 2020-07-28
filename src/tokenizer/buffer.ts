export class Buffer {

  private data: string;

  private index: number;

  constructor() {
    this.data = '';
    this.index = 0;
  }

  write(chunk: string): void {
    this.data += chunk;
  }

  next(): string {
    return this.data[this.index++];
  }

  hasData(): boolean {
    return this.index < this.data.length;
  }

  // look ahead includes the current character
  lookAhead(numberOfCharacters: number): string {
    if (this.index + numberOfCharacters - 1 < this.data.length) {
      return this.data.substr(this.index - 1, numberOfCharacters);
    }
  }

  // fast forward includes the current character
  fastForward(numberOfCharacters: number): void {
    this.index += numberOfCharacters - 1;
  }

}
