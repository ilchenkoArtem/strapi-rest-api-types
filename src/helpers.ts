import {Primitive} from "type-fest";
import {StrapiBaseDTO, StrapiComponentDTO} from 'src/response-dto';
import {IsNever, IsNeverOrAny} from 'expect-type';

export type StrapiDataModel = Record<string, any>;

export type ExcludePrimitive<T> = Exclude<T, Primitive>;
export type Clear<T> = Exclude<T, undefined | null>
export type IsTrueOfBooleanIntersection<T> = [T] extends [true] ? true : false;

/** Check Is Component Data */
export type IsComponentRelation<KeyValue> =
  IsNeverOrAny<KeyValue> extends true
    ? false
    : KeyValue extends StrapiComponentDTO
      ? true
      : false;

export type IsDynamicZoneRelation<KeValue> =
  IsNever<KeValue> extends true
    ? false
    : KeValue extends (infer Model)[]
      ? IsComponentRelation<Model>
      : false

export type IsPrimitive<T> = ExcludePrimitive<T> extends never ? true : false;

/** Relation but not component or dynamic zone */
export type IsDefaultRelation<KeyValue> =
  IsNeverOrAny<KeyValue> extends true
    ? false
    : KeyValue extends object
      ? IsComponentRelation<KeyValue> extends true
        ? false
        : IsDynamicZoneRelation<KeyValue> extends true
          ? false
          : KeyValue extends StrapiBaseDTO
            ? true
            : KeyValue extends (infer Model)[]
              ? IsDefaultRelation<Model>
              : false
      : false

/** Check is populate, or component, or dynamic zone  */
export type IsAnyRelation<KeyValue, ClearKeyValue extends Clear<KeyValue> = Clear<KeyValue>> =
  IsTrueOfBooleanIntersection<IsComponentRelation<ClearKeyValue> & IsDynamicZoneRelation<ClearKeyValue> & IsDefaultRelation<ClearKeyValue>>

/**
 * Deep filtering isn't available for polymorphic relations (eg: Dynamic Zones & Media Fields).
 */
export type IsAvailableRelationForDeepFilter<
  KeyValue, ClearKeyValue extends Clear<KeyValue> = Clear<KeyValue>
> = IsDefaultRelation<ClearKeyValue>

export type StrapiModelWithoutRelation<Model extends StrapiDataModel> = {
  [Key in keyof Model as IsAnyRelation<Model[Key]> extends true ? never : Key]: Model[Key];
};

export type GetStrapiModelByPopulate<Model extends StrapiDataModel | StrapiDataModel[]> =
  Model extends (infer A)[] ? ExcludePrimitive<A> : ExcludePrimitive<Model>
