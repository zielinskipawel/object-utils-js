import i,{isObject, isObjectOrNull, toObject} from "../src/index"

test("index.objectHelper should contains functions", () => {
    expect(i.toObject).toBeInstanceOf(Function)
    expect(toObject).toBeInstanceOf(Function)
    
    expect(i.isObjectOrNull).toBeInstanceOf(Function)
    expect(isObjectOrNull).toBeInstanceOf(Function)
    
    expect(i.isObject).toBeInstanceOf(Function)
    expect(isObject).toBeInstanceOf(Function)
})
