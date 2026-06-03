const env = require('dotenv').config().parsed;
let sa = env.FIREBASE_SERVICE_ACCOUNT;
if (sa.startsWith("'")) sa = sa.slice(1,-1);
const b64 = Buffer.from(sa).toString('base64');
console.log(b64);
