import loader from '../src/stateless-jsx-loader';

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