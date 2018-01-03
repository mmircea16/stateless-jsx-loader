import fs from 'fs';
import fillTemplate from './jsx-stateless'
const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    let name = loaderUtils.interpolateName(this, "[name]", {});
    name = name.replace('.html', '');

    return fillTemplate(classTemplate, name, content);
};