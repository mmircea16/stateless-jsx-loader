const R = require('ramda');

module.exports = function fillTemplate(classTemplate, name, content, imports = []) {
    const importTemplate = "import $$name$$ from './$$name$$.html.jsx';";
    const reactImport = "import React from 'react'";

    let importStatements = imports.map(name => R.replace(/\$\$name\$\$/g, name, importTemplate));
    importStatements.push(reactImport);

    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content)
             .replace("$$imports$$", importStatements.join("\n"));
};