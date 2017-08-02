const base64 = require('base-64');

const decodeStr = string => base64.decode(string);

export default decodeStr;
