export type IIsObjectFunc = (input: any) => boolean
export type IToObjectFunc = (input: any) => typeof Object

export type IObjectHelper = {
    isObject: IIsObjectFunc
    isObjectOrNull: IIsObjectFunc
    toObject: IToObjectFunc
}

export class objectHelper implements IObjectHelper {
    public isObject = (input: any): boolean => {
        if (input && !Array.isArray(input) && typeof input === "object" && input instanceof Object) {
            return true
        } else return false
    }

    public isObjectOrNull = (input: any): boolean => {
        if (input === null || this.isObject(input)) {
            return true
        } else return false
    }

    public toObject = (input: any) => {
        if (this.isObject(input)) {
            return input
        } else return {}
    }
    //Returns true if it is a DOM node
    public isDOMNode(o: any) {
        if(!o) return false
        return !this.isObject(o) && typeof Node === "object"
            ? o instanceof Node
            : true && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    }

    //Returns true if it is a DOM element
    public isDOMElement(o: any) {
        return this.isDOMNode(o) && typeof HTMLElement === "object"
            ? o instanceof HTMLElement //DOM2
            : true && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    }
}

export default new objectHelper()
