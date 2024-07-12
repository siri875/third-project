const crypto=require('crypto');
const hash=crypto.createHash('sha266');
hash.update('siri2003')
console.log(hash.digest('hex'));