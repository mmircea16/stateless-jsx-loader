import fillTemplate from '../src/jsx-stateless';

test('should interpolate name and content', () => {
    let result = fillTemplate("Name: $$class_name$$, Content: $$jsx_content$$", "Planet", "This is planet Earth");
    expect(result).toBe("Name: Planet, Content: This is planet Earth")
});
