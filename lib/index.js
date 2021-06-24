const writeNewFile = require('./write-new-file');
const runTemplate = require('./template');

const outputFilename = 'out.md';

const templateResult = runTemplate();
writeNewFile(outputFilename, templateResult);
