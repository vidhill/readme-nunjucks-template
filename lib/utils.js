const path = require('path');

function getPackagePath() {
    return path.resolve(process.cwd(), 'package.json');
}

module.exports = {
    getPackagePath,
};
