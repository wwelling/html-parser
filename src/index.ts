import fs from 'fs';
import Reader from './reader';
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
                emitCharacterToken: () => {
                  //
                },
                emitCommentToken: () => {
                  //
                },
                emitDOCTYPEToken: () => {
                  //
                },
                emitStartTagToken: () => {
                  //
                },
                emitEndTagToken: () => {
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
  case 2:
    reader.read(`htmlparser-benchmark/files/fff65493446424d4b8d49bd1027a851bdd685a75bd11a324897ebe836b3ebb85.html`)
      .then((data: string) => {
        for (let i = 0; i < attempts; i++) {
          console.time('fff65493446424d4b8d49bd1027a851bdd685a75bd11a324897ebe836b3ebb85.html');
          new Tokenizer({
            emitCharacterToken: () => {
              //
            },
            emitCommentToken: () => {
              //
            },
            emitDOCTYPEToken: () => {
              //
            },
            emitStartTagToken: () => {
              //
            },
            emitEndTagToken: () => {
              //
            },
            emitEndOfFileToken: () => {
              //
            },
            onEnd: () => {
              console.timeEnd('fff65493446424d4b8d49bd1027a851bdd685a75bd11a324897ebe836b3ebb85.html');
            }
          }).end(data);
        }
      }).catch(console.error);
    break;
  default:
    break;
}
