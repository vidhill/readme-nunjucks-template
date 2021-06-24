const { promisify } = require('util');

const nunjucks = require('nunjucks');

const { getPackagePath } = require('./utils');

function setupNunjucks() {
    nunjucks.configure('.', { autoescape: true });

    // convert the render function to a promise returning function
    const renderP = promisify(nunjucks.render);

    return Object.assign({ renderP }, nunjucks);
}

/**
 *
 * Compile the template, using the `package.json` as data source
 *
 * @param {string} sourceFilePath - The path to the source template file
 * @returns {Promise<string>} The rendered template as a string
 *
 */
function renderTemplate(sourceFilePath) {
    const n = setupNunjucks();
    const packagePath = getPackagePath();
    const packageJson = require(packagePath);

    return n.renderP(sourceFilePath, packageJson);
}

module.exports = renderTemplate;
