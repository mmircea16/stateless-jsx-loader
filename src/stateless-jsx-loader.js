const fs = require('fs');
const fillTemplate = require('./jsx-stateless');
const getFileName = require('./utils');
const path = require('path');
const walk = require('acorn-jsx-walk');


module.exports = function (content) {
    let pathToTemplate = path.resolve(__dirname, 'component-template.jsx');
    this.addDependency(pathToTemplate);

    let template = fs.readFileSync(pathToTemplate, 'utf-8');

    let className = getFileName(this);

    let imports = [];

    walk.default(content, {
        JSXElement(node) {
            let name = node.openingElement.name.name;
            if (name[0] === name[0].toUpperCase()) {
                imports.push(name);
            }
        }
    });

    let importTemplate = "import $$name$$ from './$$name$$.html.jsx';";

    let map = imports.map(name => importTemplate.replace("$$name$$", name).replace("$$name$$", name));
    map.push("import React from 'react'");
    let importsContent = map.join("\n");

    return fillTemplate(template, className, content, importsContent);
};