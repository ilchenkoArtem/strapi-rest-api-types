import {expectTypeOf} from 'expect-type';
import {
  TestComplexModel,
  TestComponent,
  TestDefaultArrayRelation,
  TestDefaultObjectRelation,
  TestDynamicZone
} from 'tests/tests-model.test';
import {
  IsComponentRelation,
  IsAvailableRelationForDeepFilter,
  IsDynamicZoneRelation,
  IsDefaultRelation,
  IsAnyRelation, StrapiModelWithoutRelation, Clear
} from 'src/helpers';
import {Primitive} from 'type-fest';

//IsAnyRelation
expectTypeOf<Clear<TestComponent>>().toEqualTypeOf<TestComponent>();
expectTypeOf<Clear<TestComponent | undefined | null>>().toEqualTypeOf<TestComponent>();
expectTypeOf<Clear<TestDynamicZone>>().toEqualTypeOf<TestDynamicZone>();
expectTypeOf<Clear<TestDynamicZone | undefined | null>>().toEqualTypeOf<TestDynamicZone>();

//IsComponentRelation
expectTypeOf<IsComponentRelation<TestComponent>>().toEqualTypeOf<true>();
expectTypeOf<IsComponentRelation<TestDynamicZone>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<TestDefaultArrayRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<TestDefaultObjectRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<never>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<any>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<{}>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<object>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<[]>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<any[]>>().toEqualTypeOf<false>();

//IsDynamicZoneRelation
expectTypeOf<IsDynamicZoneRelation<TestDynamicZone>>().toEqualTypeOf<true>();
expectTypeOf<IsDynamicZoneRelation<TestComponent>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<TestDefaultArrayRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponentRelation<TestDefaultObjectRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<never>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<any>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<object>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<any[]>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZoneRelation<[]>>().toEqualTypeOf<false>();

//IsDefaultRelation
expectTypeOf<IsDefaultRelation<TestComponent>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<TestDynamicZone>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<TestDefaultArrayRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsDefaultRelation<TestDefaultObjectRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsDefaultRelation<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<any>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<never>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<object>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<[]>>().toEqualTypeOf<false>();
expectTypeOf<IsDefaultRelation<any[]>>().toEqualTypeOf<false>();

//IsAvailableRelationForDeepFilter
expectTypeOf<IsAvailableRelationForDeepFilter<TestComponent>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<TestComponent>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<TestDynamicZone>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<TestDefaultArrayRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsAvailableRelationForDeepFilter<TestDefaultObjectRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsAvailableRelationForDeepFilter<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<any>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<never>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<object>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<[]>>().toEqualTypeOf<false>();
expectTypeOf<IsAvailableRelationForDeepFilter<any[]>>().toEqualTypeOf<false>();

//IsAnyRelation
expectTypeOf<IsAnyRelation<TestComponent>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestComponent | undefined>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDynamicZone>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDynamicZone | undefined>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDefaultArrayRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDefaultArrayRelation | undefined>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDefaultObjectRelation>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<TestDefaultObjectRelation | undefined>>().toEqualTypeOf<true>();
expectTypeOf<IsAnyRelation<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<any>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<never>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<object>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<[]>>().toEqualTypeOf<false>();
expectTypeOf<IsAnyRelation<any[]>>().toEqualTypeOf<false>();

//StrapiModelWithoutPopulate
type WithoutRelation = Pick<TestComplexModel, 'primitiveField'>
expectTypeOf<StrapiModelWithoutRelation<TestComplexModel>>().toEqualTypeOf<WithoutRelation>();
