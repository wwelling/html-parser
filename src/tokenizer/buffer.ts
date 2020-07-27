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

}
