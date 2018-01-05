import utils from '../src/utils';

test('should retrieve the file name without extensions', () => {
    let mockContext = {
        resourcePath: "./List.html.jsx"
    };

    expect(utils.getFileName(mockContext)).toBe("List")
});