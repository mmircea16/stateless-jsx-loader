const loaderUtils = require('loader-utils');

module.exports = function getFileName(context) {
    let name = loaderUtils.interpolateName(context, "[name]", {});
    return name.replace('.html', '');
};