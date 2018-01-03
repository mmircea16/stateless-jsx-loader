const fs = require('fs');
const fillTemplate = require('./jsx-stateless')
const getFileName = require('./utils')
const path = require('path');

module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    let className = getFileName(this);

    return fillTemplate(classTemplate, className, content);
};