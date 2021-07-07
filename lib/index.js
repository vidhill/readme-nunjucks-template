const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const writeNewFile = require('./write-new-file');
const renderTemplate = require('./render-template');
const stdout = require('./stdout');

const args = hideBin(process.argv);

const argv = yargs(args)
    .command(
        '$0 [inputFilename] [outputFilename]',
        'Render input file',
        (y) => {
            return y
                .positional('inputFilename', {
                    describe: 'input file name',
                    default: 'README.md',
                })
                .positional('outputFilename', {
                    describe: 'output file name',
                    default: 'README.md',
                });
        }
    )
    .option('write-out', {
        alias: 'W',
        type: 'boolean',
        description:
            'If provided output is not written to disk, result is output to stdout instead',
        default: false,
    }).argv;

const { inputFilename, writeOut, outputFilename } = argv;

if (inputFilename === outputFilename) {
    stdout.warning(
        'Input filename and output filename match, input will be overwritten'
    );
}

renderTemplate(inputFilename)
    .then((templateResult) => {
        if (writeOut) {
            // eslint-disable-next-line no-console
            return console.log(templateResult);
        }

        if (templateResult) {
            return writeNewFile(outputFilename, templateResult);
        }
    })
    .catch(({ message }) => {
        if (writeOut) {
            // exit with signal that there was an error
            return process.exit(1);
        }
        stdout.error('*** Error rendering file,', message);
    });
