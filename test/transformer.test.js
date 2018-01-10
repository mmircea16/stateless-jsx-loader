import transformer from '../src/transformer';

describe("remove attribute", () => {

    it("should remove attribute when it is the only attribute", () => {
        let result =
            transformer.removeExtraAttributes("<div someAttribute='something'>hello</div>", "someAttribute");
        expect(result).toBe("<div>hello</div>")
    });

    it("should remove attribute when it is the first attribute", () => {
        let result =
            transformer.removeExtraAttributes("<div someAttribute='something' name='World'>hello</div>", "someAttribute");
        expect(result).toBe("<div name='World'>hello</div>")
    });

    it("should remove attribute when it is the last attribute", () => {
        let result =
            transformer.removeExtraAttributes("<div name='World' someAttribute='something'>hello</div>", "someAttribute");
        expect(result).toBe("<div name='World'>hello</div>")
    });

    it("should remove attribute when it is the middle of attributes", () => {
        let result = transformer.removeExtraAttributes("<div name='World' someAttribute='something' greeting='hello'>hello</div>", "someAttribute");
        expect(result).toBe("<div name='World' greeting='hello'>hello</div>")
    })

});