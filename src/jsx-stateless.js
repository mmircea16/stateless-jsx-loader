const R = require('ramda');

module.exports = function fillTemplate(classTemplate, name, content, imports = []) {
    const IMPORT_TEMPLATE = "import $$name$$ from '$$path$$/$$name$$.html.jsx';";
    const REACT_IMPORT = "import React from 'react'";

    let importStatements = imports.map(
        aImport => {
            let withName = R.replace(/\$\$name\$\$/g, aImport.name, IMPORT_TEMPLATE);
            return R.replace(/\$\$path\$\$/g, aImport.path, withName);
        });

    importStatements.push(REACT_IMPORT);

    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content)
             .replace("$$imports$$", importStatements.join("\n"));
};