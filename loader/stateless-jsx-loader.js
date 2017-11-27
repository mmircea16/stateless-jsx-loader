var fs = require('fs');
var path = require('path');

module.exports = function (content) {
    let class_template = fs.readFileSync(path.resolve(__dirname, 'component-template.jsx'), 'utf-8');

    return class_template.replace("$$jsx_content$$", content).replace("$$class_name$$", "Hello");
};