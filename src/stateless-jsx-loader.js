const fs = require('fs');
const fillTemplate = require('./jsx-stateless');
const utils = require('./utils');
const path = require('path');
const transformer = require('./transformer');

const IMPORT_PATH_ATTR = '__jsxpath';
const DEFAULT_PATH = '.';

module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let template = fs.readFileSync(pathToTemplate, 'utf-8');
    let className = utils.getFileName(this);
    let imports = utils.getCustomComponents(content, {importAttr: IMPORT_PATH_ATTR, defaultPath: DEFAULT_PATH});

    content = transformer.removeExtraAttributes(content, IMPORT_PATH_ATTR);

    return fillTemplate(template, className, content, imports);
};