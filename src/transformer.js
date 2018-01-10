const R = require('ramda');

module.exports = {
    removeAttribute: function (content, attribute) {
        const JSXPATH_REGEX = new RegExp("\\s"+attribute+"=['\"].*?['\"]","g");
        return R.replace(JSXPATH_REGEX, '', content);
    }
};

