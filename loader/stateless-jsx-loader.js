import fs from 'fs';
import fillTemplate from './jsx-stateless'
import getFileName from './utils'
const path = require('path');

module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    let name = getFileName(this);

    return fillTemplate(classTemplate, name, content);
};