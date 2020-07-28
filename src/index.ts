import fs from 'fs';
import Reader from './reader';
import { CharacterToken, CommentToken, DOCTYPEToken, EndTagToken, StartTagToken } from './tokenizer/token';
import Tokenizer from './tokenizer/tokenizer';

const reader = new Reader();

const test = Number(process.argv[2] || 0);
const attempts = Number(process.argv[3] || 1);

switch (test) {
  case 1:
    fs.readdir('htmlparser-benchmark/files', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      files.forEach(function (file) {
        reader.read(`htmlparser-benchmark/files/${file}`)
          .then((data: string) => {
            for (let i = 0; i < attempts; i++) {
              console.time(file);
              new Tokenizer({
                emitCharacterToken: (token: CharacterToken) => {
                  //
                },
                emitCommentToken: (token: CommentToken) => {
                  //
                },
                emitDOCTYPEToken: (token: DOCTYPEToken) => {
                  //
                },
                emitStartTagToken: (token: StartTagToken) => {
                  //
                },
                emitEndTagToken: (token: EndTagToken) => {
                  //
                },
                emitEndOfFileToken: () => {
                  //
                },
                onEnd: () => {
                  console.timeEnd(file);
                }
              }).end(data);
            }
          }).catch(console.error);
      });
    });
    break;
  default:
    break;
}
