const R = require('ramda');

module.exports = {
    removeAttribute: function (content, attribute) {
        let regexForAttribute = new RegExp("\\s"+attribute+"=['\"].*?['\"]","g");
        return R.replace(regexForAttribute, '', content);
    }
};

