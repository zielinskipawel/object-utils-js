export declare type IIsObjectFunc = (input: any) => boolean;
export declare type IToObjectFunc = (input: any) => typeof Object;
export declare type IObjectHelper = {
    isObject: IIsObjectFunc;
    isObjectOrNull: IIsObjectFunc;
    toObject: IToObjectFunc;
};
export declare class objectHelper implements IObjectHelper {
    isObject: (input: any) => boolean;
    isObjectOrNull: (input: any) => boolean;
    toObject: (input: any) => any;
}
declare const _default: objectHelper;
export default _default;
