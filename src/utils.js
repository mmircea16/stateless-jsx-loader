const loaderUtils = require('loader-utils');

module.exports = {
    getFileName: function (context) {
        let name = loaderUtils.interpolateName(context, "[name]", {});
        return name.replace('.html', '');
    }
};