const R = require('ramda');

module.exports = function fillTemplate(classTemplate, name, content, imports = []) {
    const importTemplate = "import $$name$$ from '$$path$$/$$name$$.html.jsx';";
    const reactImport = "import React from 'react'";

    let importStatements = imports.map(
        aImport => {
            let withName = R.replace(/\$\$name\$\$/g, aImport.name, importTemplate);
            return R.replace(/\$\$path\$\$/g, aImport.path, withName);
        });

    importStatements.push(reactImport);

    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content)
             .replace("$$imports$$", importStatements.join("\n"));
};