const R = require('ramda');

module.exports = {
    removeExtraAttributes: function (content) {
        const JSXPATH_REGEX = /\s__jsxpath=['"].*?['"]/g;
        return R.replace(JSXPATH_REGEX, '', content);
    }
};

