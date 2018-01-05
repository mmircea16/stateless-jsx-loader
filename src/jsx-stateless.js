module.exports = function fillTemplate(classTemplate, name, content, importsContent) {
    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content)
             .replace("$$imports$$", importsContent);
};