const loaderUtils = require('loader-utils');
const walk = require('acorn-jsx-walk');
const R = require('ramda');

const IMPORT_PATH_ATTR = '__jsxpath';
const DEFAULT_PATH = '.';

function importFor(name, path) {
    return {
        name: name,
        path: path
    }
}

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
                    let attrs = node.openingElement.attributes;
                    let jsxPathAttrs = R.filter(attr => attr.name.name === IMPORT_PATH_ATTR, attrs);
                    let path = jsxPathAttrs[0] ? jsxPathAttrs[0].value.value : DEFAULT_PATH;

                    imports.push(importFor(name, path));
                }
            }
        });

        return R.uniq(imports);
    }
};