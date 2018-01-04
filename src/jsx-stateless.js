module.exports = function fillTemplate(classTemplate, name, content) {
    return classTemplate
             .replace("$$class_name$$", name)
             .replace("$$jsx_content$$", content);
};