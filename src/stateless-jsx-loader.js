const fs = require('fs');
const fillTemplate = require('./jsx-stateless');
const utils = require('./utils');
const path = require('path');
const R = require('ramda');

function removeExtraAttributes(content) {
    const JSXPATH_REGEX = /\s__jsxpath=['"].*?['"]/g;
    return R.replace(JSXPATH_REGEX, '', content);
}

module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let template = fs.readFileSync(pathToTemplate, 'utf-8');
    let className = utils.getFileName(this);
    let imports = utils.getCustomComponents(content);

    content = removeExtraAttributes(content);

    return fillTemplate(template, className, content, imports);
};