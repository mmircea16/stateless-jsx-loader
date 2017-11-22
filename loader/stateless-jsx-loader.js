var fs = require('fs')

module.exports = function (content) {
    let class_template = fs.readFileSync('./loader/component_template.jsx', 'utf-8');

    return class_template.replace("$$jsx_content$$", content).replace("$$class_name$$", "Hello");
};