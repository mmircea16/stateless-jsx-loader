const loaderUtils = require('loader-utils');
const walk = require('acorn-jsx-walk');

module.exports = {
    getFileName: function (context) {
        let name = loaderUtils.interpolateName(context, "[name]", {});
        return name.replace('.html', '');
    },

    getCustomComponents: function (content) {
        let imports = [];

        walk.default(content, {
            JSXElement(node) {
                let name = node.openingElement.name.name;
                if (name[0] === name[0].toUpperCase()) {
                    imports.push(name);
                }
            }
        });

        return imports;
    }
};