import i,{isObject, isObjectOrNull, toObject, isDOMNode,isDOMElement} from "../src/index"

test("index.objectHelper should contains functions", () => {
    expect(i.toObject).toBeInstanceOf(Function)
    expect(toObject).toBeInstanceOf(Function)
    
    expect(i.isObjectOrNull).toBeInstanceOf(Function)
    expect(isObjectOrNull).toBeInstanceOf(Function)
    
    expect(i.isObject).toBeInstanceOf(Function)
    expect(isObject).toBeInstanceOf(Function)
    
    expect(i.isDOMNode).toBeInstanceOf(Function)
    expect(isDOMNode).toBeInstanceOf(Function)
    
    expect(i.isDOMElement).toBeInstanceOf(Function)
    expect(isDOMElement).toBeInstanceOf(Function)
})
