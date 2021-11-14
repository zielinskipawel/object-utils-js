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
}

export default new objectHelper()
