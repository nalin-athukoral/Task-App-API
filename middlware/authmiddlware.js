// logger.js

const logMiddleware = (req, res, next) => {
    console.log('asdasdas');
    next();
};

module.exports = logMiddleware;
