import utils from '../src/utils';

test('should retrieve the file name without extensions', () => {
    let mockContext = {
        resourcePath: "./List.html.jsx"
    };

    expect(utils.getFileName(mockContext)).toBe("List")
});

describe('retrive custom built components', () => {
    test('should handle simple list', () => {
        let someJSX = "<Something lang='EN'> <Word/> <Letter/> <apr/> <div>Hello</div> </Something>";
        let components = utils.getCustomComponents(someJSX);

        expect(components).toEqual(expect.arrayContaining(["Something", "Word", "Letter"]));
        expect(components).toHaveLength(3);
    });

    test('should handle duplicates', () => {
        let someJSX = "<div><Something lang='EN'/> <Something/> <Word></Word></div>";
        let components = utils.getCustomComponents(someJSX);

        expect(components).toEqual(expect.arrayContaining(["Something", "Word"]));
        expect(components).toHaveLength(2);
    });
});
