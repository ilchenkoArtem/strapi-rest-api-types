import {Primitive} from "type-fest";
import {StrapiBaseDTO, StrapiComponentDTO} from 'src/response-dto';
import {IsNever, IsNeverOrAny} from 'expect-type';

export type StrapiDataModel = Record<string, any>;

export type ExcludePrimitive<T> = Exclude<T, Primitive>;

/** Check Is Component Data */
export type IsComponent<KeyValue> =
  IsNeverOrAny<KeyValue> extends true
    ? false
    : KeyValue extends StrapiComponentDTO
      ? true
      : false;

export type IsDynamicZone<KeValue> =
  IsNever<KeValue> extends true
    ? false
    : KeValue extends (infer Model)[]
      ? IsComponent<Model>
      : false

export type IsPrimitive<T> = ExcludePrimitive<T> extends never ? true : false;
/** Check is populate, or component, or dynamic zone  */
export type IsRelation<T> = ExcludePrimitive<T> extends never ? false : true;

/** Relation but not component or dynamic zone */
export type IsDefaultRelation<KeyValue> =
  IsNeverOrAny<KeyValue> extends true
    ? false
    : KeyValue extends object
      ? IsComponent<KeyValue> extends true
        ? false
        : IsDynamicZone<KeyValue> extends true
          ? false
          : KeyValue extends StrapiBaseDTO
            ? true
            : KeyValue extends (infer Model)[]
              ? IsDefaultRelation<Model>
              : false
      : false


/**
 * Deep filtering isn't available for polymorphic relations (eg: Dynamic Zones & Media Fields).
 */
export type IsAvailableRelationForDeepFilter<KeyValue> = IsDefaultRelation<KeyValue>


export type StrapiModelWithoutPopulate<Model extends StrapiDataModel> = {
  [Key in keyof Model as IsRelation<Model[Key]> extends true ? never : Key]: Model[Key];
};

export type GetStrapiModelByPopulate<Model extends StrapiDataModel | StrapiDataModel[]> =
  Model extends (infer A)[] ? ExcludePrimitive<A> : ExcludePrimitive<Model>
