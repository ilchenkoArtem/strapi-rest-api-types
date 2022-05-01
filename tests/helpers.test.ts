import {expectTypeOf} from 'expect-type';
import {
  TestComponent,
  TestDefaultArrayRelation,
  TestDefaultObjectRelation,
  TestDynamicZone
} from 'tests/tests-model.test';
import {IsComponent, IsAvailableRelationForDeepFilter, IsDynamicZone, IsDefaultRelation} from 'src/helpers';
import {Primitive} from 'type-fest';

//IsComponent
expectTypeOf<IsComponent<TestComponent>>().toEqualTypeOf<true>();
expectTypeOf<IsComponent<TestDynamicZone>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<TestDefaultArrayRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<TestDefaultObjectRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<never>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<any>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<{}>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<object>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<[]>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<any[]>>().toEqualTypeOf<false>();

//IsDynamicZone
expectTypeOf<IsDynamicZone<TestDynamicZone>>().toEqualTypeOf<true>();
expectTypeOf<IsDynamicZone<TestComponent>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<TestDefaultArrayRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsComponent<TestDefaultObjectRelation>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<Primitive>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<never>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<any>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<object>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<any[]>>().toEqualTypeOf<false>();
expectTypeOf<IsDynamicZone<[]>>().toEqualTypeOf<false>();

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

