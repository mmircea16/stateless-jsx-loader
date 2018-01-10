const walk = require('acorn-jsx-walk');
const R = require('ramda');

function importFor(name, path) {
    return {
        name: name,
        path: path
    }
}

function capitalized(name) {
    return name[0] === name[0].toUpperCase();
}

module.exports = {
    getCustomComponents: function (content, options) {
        let imports = [];

        walk.default(content, {
            JSXElement(node) {
                let name = node.openingElement.name.name;
                if (capitalized(name)) {
                    let attrs = node.openingElement.attributes;
                    let importPathAttrs = R.filter(attr => attr.name.name === options.importAttr, attrs);
                    let path = importPathAttrs[0] ? importPathAttrs[0].value.value : options.defaultPath;

                    imports.push(importFor(name, path));
                }
            }
        });

        return R.uniq(imports);
    }
};