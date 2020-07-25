import fs, { ReadStream } from 'fs';
import util from 'util';

export default class Reader {

  async read(path: string): Promise<string> {
    return await (await util.promisify(fs.readFile)(path, 'utf8')).toString();
  }

  async stream(path: string): Promise<ReadStream> {
    return await fs.createReadStream(path, { encoding: 'utf8' });
  }

}
