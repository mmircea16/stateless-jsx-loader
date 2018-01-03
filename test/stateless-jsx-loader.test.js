import loader from '../loader/stateless-jsx-loader';
import fillTemplate from '../loader/jsx-stateless'

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
        "export class Hello extends React.Component {\n" +
        "    render() {\n" +
        "        return <div>Hello World</div>\n" +
        "    }\n" +
        "}";

    expect(code).toBe(expectedGeneratedCode);
});

test('should interpolate name and content', () => {
    let result = fillTemplate("Name: $$class_name$$, Content: $$jsx_content$$", "Planet", "This is planet Earth");
    expect(result).toBe("Name: Planet, Content: This is planet Earth")
});