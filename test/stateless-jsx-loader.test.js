import loader from '../src/stateless-jsx-loader';
import fillTemplate from '../src/jsx-stateless';
import getFileName from '../src/utils';

test('should compile a simple Hello World', () => {
    let mockContext = {
        addDependency: function(){},
        resourcePath: "./Hello.html.jsx"
    };

    let loaderWithContext = loader.bind(mockContext);
    let code = loaderWithContext("<div>Hello World</div>");

    let expectedGeneratedCode =
        "import React from 'react'\n" +
        "\n" +
        "export default class Hello extends React.Component {\n" +
        "    render() {\n" +
        "        return <div>Hello World</div>\n" +
        "    }\n" +
        "}";

    expect(code).toBe(expectedGeneratedCode);
});

test('should handle higher order stateless component', () => {
    let mockContext = {
        addDependency: function(){},
        resourcePath: "./Greetings.html.jsx"
    };

    let loaderWithContext = loader.bind(mockContext);
    let code = loaderWithContext("<div><Hola name='World'/><Hello name='World'/></div>");

    let expectedGeneratedCode =
        "import Hola from './Hola.html.jsx';\n" +
        "import Hello from './Hello.html.jsx';\n" +
        "import React from 'react'\n" +
        "\n" +
        "export default class Greetings extends React.Component {\n" +
        "    render() {\n" +
        "        return <div><Hola name='World'/><Hello name='World'/></div>\n" +
        "    }\n" +
        "}";

    expect(code).toBe(expectedGeneratedCode);
});

test('should interpolate name and content', () => {
    let result = fillTemplate("Name: $$class_name$$, Content: $$jsx_content$$", "Planet", "This is planet Earth");
    expect(result).toBe("Name: Planet, Content: This is planet Earth")
});

test('should retrieve the file name without extensions', () => {
    let mockContext = {
        resourcePath: "./List.html.jsx"
    };

    expect(getFileName(mockContext)).toBe("List")
});