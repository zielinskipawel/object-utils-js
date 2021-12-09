
import objHelper from "../src/objectHelper"

test.each([
    [undefined, false],
    [null, false],
    [Object.create(null), false],
    [global.document, false],
    [global.document.createElement("div"), false],
    [global.document.createElement("p"), false],
    [{}, true],
    [Object.create({}), true],
    [Object.create(Object.prototype), true],
    [{ a: "a" }, true],
    [{ a: { sss: "fff" } }, true],
    [{ a: { sss: { ddd: "rrr" }, fff: "eee" } }, true],
    [[], false],
    [[1, 2], false],
    [["a", "b"], false],
    [[{}], false],
    [[{}, {}], false],
    [["asd"], false],
    [["asd", "qwe"], false],
    [[1], false],
    ["asd", false],
    [1, false],
    [0, false],
    [-1, false],
    [NaN, false],
    [false, false],
    [true, false],
    [() => {}, false],
    [
        () => {
            return { asd: "qwe" }
        },
        false,
    ],
])("%# for data %p isObject should return %p", (data, expected) => {
    expect(objHelper.isObject(data)).toStrictEqual(expected)
})

test.each([
    [undefined, false],
    [null, true],
    [Object.create(null), false],
    [global.document, false],
    [global.document.createElement("div"), false],
    [global.document.createElement("p"), false],
    [{}, true],
    [Object.create({}), true],
    [Object.create(Object.prototype), true],
    [{ a: "a" }, true],
    [{ a: { sss: "fff" } }, true],
    [{ a: { sss: { ddd: "rrr" }, fff: "eee" } }, true],
    [[], false],
    [[1, 2], false],
    [["a", "b"], false],
    [[{}], false],
    [[{}, {}], false],
    [["asd"], false],
    [["asd", "qwe"], false],
    [[1], false],
    ["asd", false],
    [1, false],
    [0, false],
    [-1, false],
    [NaN, false],
    [false, false],
    [true, false],
    [() => {}, false],
    [
        () => {
            return { asd: "qwe" }
        },
        false,
    ],
])("%# for data %p isObjectOrNull should return %p", (data, expected) => {
    expect(objHelper.isObjectOrNull(data)).toStrictEqual(expected)
})

test.each([
    [undefined, {}],
    [null, {}],
    [Object.create(null), {}],
    [global.document, {}],
    [global.document.createElement("div"), {}],
    [global.document.createElement("p"), {}],
    [{}, {}],
    [Object.create({}), {}],
    [Object.create(Object.prototype), {}],
    [{ a: "a" }, { a: "a" }],
    [{ a: { sss: "fff" } }, { a: { sss: "fff" } }],
    [{ a: { sss: { ddd: "rrr" }, fff: "eee" } }, { a: { sss: { ddd: "rrr" }, fff: "eee" } }],
    [[], {}],
    [[1, 2], {}],
    [["a", "b"], {}],
    [[{}], {}],
    [[{}, {}], {}],
    [["asd"], {}],
    [["asd", "qwe"], {}],
    [[1], {}],
    ["asd", {}],
    [1, {}],
    [0, {}],
    [-1, {}],
    [NaN, {}],
    [false, {}],
    [true, {}],
    [() => {}, {}],
    [
        () => {
            return { asd: "qwe" }
        },
        {},
    ],
])("%# for data %p toObject should return %p", (data, expected) => {
    expect(objHelper.toObject(data)).toStrictEqual(expected)
})

test.each([
    [{}, false],
    [null, false],
    [undefined, false],
    ["", false],
    ["asd", false],
    [1, false],
    [true, false],
    [[], false],
    [[1], false],
    [document.createElement("p"), true],
    [document.createElement("div"), true],
    [document.createElement("script"), true],
    [document.createElement("style"), true],
    [document.createElement("HTML"), true],
    [document.createElement("iframe"), true],
    [document, true],
])("%# for data %p isDOMNode should return %p", (data, expected) => {
    expect(objHelper.isDOMNode(data)).toStrictEqual(expected)
})

test.each([
    [{}, false],
    [null, false],
    [undefined, false],
    ["", false],
    ["asd", false],
    [1, false],
    [true, false],
    [[], false],
    [[1], false],
    [document.createElement("p"), true],
    [document.createElement("div"), true],
    [document.createElement("script"), true],
    [document.createElement("style"), true],
    [document.createElement("HTML"), true],
    [document.createElement("iframe"), true],
    [document, false],
])("%# for data %p isDOMElement should return %p", (data, expected) => {
    expect(objHelper.isDOMElement(data)).toStrictEqual(expected)
})
