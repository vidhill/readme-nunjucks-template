const fsp = require('fs').promises;

const stdout = require('./stdout');

/**
 *
 * @param {string} outputFilename - The filename to write the output to
 * @param {string} outputString - The rendered template string
 * @return {Promise}
 *
 */
function writeNewFile(outputFilename, outputString) {
    return fsp
        .writeFile(outputFilename, outputString)
        .then(() => {
            stdout.success(
                `** Successfully written "${outputFilename}" to disk`
            );
        })
        .catch((error) => {
            stdout.error(`Error writing "${outputFilename}"`, error);
        });
}

module.exports = writeNewFile;
