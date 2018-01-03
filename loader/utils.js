const loaderUtils = require('loader-utils');

export default function getFileName(context) {
    let name = loaderUtils.interpolateName(context, "[name]", {});
    return name.replace('.html', '');
}