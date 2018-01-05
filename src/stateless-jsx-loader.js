const fs = require('fs');
const fillTemplate = require('./jsx-stateless');
const utils = require('./utils');
const path = require('path');


module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let template = fs.readFileSync(pathToTemplate, 'utf-8');

    let className = utils.getFileName(this);

    let imports = utils.getCustomComponents(content);

    return fillTemplate(template, className, content, imports);
};