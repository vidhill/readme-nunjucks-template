const fsp = require('fs').promises;

const outputFilename = 'out.md';

const stdout = require('./stdout');
const runTemplate = require('./template');

function writeNewPackageDefinition(outputString) {
    return fsp
        .writeFile(outputFilename, outputString)
        .then(() => {
            stdout.success(
                `** "${outputFilename}" successfully written to disk`
            );
        })
        .catch((error) => {
            stdout.error(`Error writing "${outputFilename}"`, error);
        });
}

const templateResult = runTemplate();
writeNewPackageDefinition(templateResult);
