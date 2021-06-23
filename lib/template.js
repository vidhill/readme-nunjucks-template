const nunjucks = require('nunjucks');

const { getPackagePath } = require('./utils');

function compileTemplate(sourceFilePath = 'README.md') {
    const packagePath = getPackagePath();
    const packageJson = require(packagePath);

    nunjucks.configure('.', { autoescape: true });
    const result = nunjucks.render(sourceFilePath, packageJson);

    return result;
}

module.exports = compileTemplate;
