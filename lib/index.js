const writeNewFile = require('./write-new-file');
const renderTemplate = require('./render-template');
const stdout = require('./stdout');

const inputFilename = 'README.md';
const outputFilename = 'out.md';

renderTemplate(inputFilename)
    .then((templateResult) => {
        if (templateResult) {
            return writeNewFile(outputFilename, templateResult);
        }
    })
    .catch((err) => {
        stdout.error('*** Error rendering file,', err.message);
        return false;
    });
