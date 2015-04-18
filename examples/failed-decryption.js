/**
 * This example shows what happens if we try to decrypt something we don't have
 * the key for.
 */

var aesgcm = require('../index.js');

var encrypt = aesgcm.encrypt({
  key: aesgcm.createKeyBuffer(),
  nonce: aesgcm.createSalt(12) //optional, one will be created if not passed in
});

// wrong key, wah wah
var decrypt = aesgcm.decrypt({
  key: aesgcm.createKeyBuffer()
});

encrypt.write('This message will not be printed to stdout,\n');
encrypt.end('because the decrypter was initialized with the wrong key.\n');

encrypt.pipe(decrypt).pipe(process.stdout);