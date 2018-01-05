module.exports = function fillTemplate(classTemplate, name, content, imports = []) {
    let importTemplate = "import $$name$$ from './$$name$$.html.jsx';";

    let importStatements = imports.map(name => importTemplate.replace("$$name$$", name).replace("$$name$$", name));
    importStatements.push("import React from 'react'");
    let importsContent = importStatements.join("\n");

    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content)
             .replace("$$imports$$", importsContent);
};