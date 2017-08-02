const marked = require('marked');

const markDownConvert = string => marked(string);

export default markDownConvert;
