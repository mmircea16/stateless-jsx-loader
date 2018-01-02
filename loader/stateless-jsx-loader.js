const fs = require('fs');
const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function (content) {
    let classTemplate = fs.readFileSync(path.resolve(__dirname, 'component-template.jsx'), 'utf-8');

    let name = loaderUtils.interpolateName(this, "[name]", {});
    name = name.replace('.html', '');
    return classTemplate.replace("$$jsx_content$$", content).replace("$$class_name$$", name);
};