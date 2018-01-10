import transformer from '../src/transformer';

describe("remove extra attributes", () => {

    it("should remove __jsxpath attribute when it is the only attribute", () => {
        let result = transformer.removeExtraAttributes("<div __jsxpath='something'>hello</div>");
        expect(result).toBe("<div>hello</div>")
    });

    it("should remove __jsxpath attribute when it is the first attribute", () => {
        let result = transformer.removeExtraAttributes("<div __jsxpath='something' name='World'>hello</div>");
        expect(result).toBe("<div name='World'>hello</div>")
    });

    it("should remove __jsxpath attribute when it is the last attribute", () => {
        let result = transformer.removeExtraAttributes("<div name='World' __jsxpath='something'>hello</div>");
        expect(result).toBe("<div name='World'>hello</div>")
    });

    it("should remove __jsxpath attribute when it is the middle of attributes", () => {
        let result = transformer.removeExtraAttributes("<div name='World' __jsxpath='something' greeting='hello'>hello</div>");
        expect(result).toBe("<div name='World' greeting='hello'>hello</div>")
    })

});