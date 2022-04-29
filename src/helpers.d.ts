import { Primitive } from "type-fest";

export type StrapiDataModel = Record<string, any>;

export type ExcludePrimitive<T> = Exclude<T, Primitive>;

export type IsPopulateKey<T> = ExcludePrimitive<T> extends never ? false : true;

export type isNever<T> = [T] extends [never] ? true : false

export type StrapiModelWithoutPopulate<Model extends StrapiDataModel> = {
  [Key in keyof Model as IsPopulateKey<Model[Key]> extends true ? never : Key]: Model[Key];
};
