const logger = require('./logger');

const dummyFunction = (...args) => {
    logger.log(...args);
};

module.exports = dummyFunction;
