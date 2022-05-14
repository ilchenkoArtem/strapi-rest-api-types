import {expectType} from 'tsd';
import {expectTypeOf} from 'expect-type'
import {
  StrapiBaseFilter,
  StrapiBaseFilterOperator,
  StrapiConditionFilter,
  StrapiConditionFilterOperator,
  StrapiDeepFilter,
  StrapiFilterValue
} from 'src/filters';
import {TestModel} from 'tests/tests-model.test';
import {Primitive} from 'type-fest';

interface BaseFilter {
  [StrapiBaseFilterOperator.Equal]?: StrapiFilterValue
  [StrapiBaseFilterOperator.NotEqual]?: StrapiFilterValue
  [StrapiBaseFilterOperator.LessThan]?: StrapiFilterValue
  [StrapiBaseFilterOperator.LessThanOrEqualTo]?: StrapiFilterValue
  [StrapiBaseFilterOperator.GreaterThan]?: StrapiFilterValue
  [StrapiBaseFilterOperator.GreaterThanOrEqualTo]?: StrapiFilterValue
  [StrapiBaseFilterOperator.IncludedInAnArray]?: StrapiFilterValue[]
  [StrapiBaseFilterOperator.NotIncludedInAnArray]?: StrapiFilterValue[]
  [StrapiBaseFilterOperator.ContainsCaseSensitive]?: StrapiFilterValue
  [StrapiBaseFilterOperator.NotContainsCaseSensitive]?: StrapiFilterValue
  [StrapiBaseFilterOperator.Containsi]?: StrapiFilterValue
  [StrapiBaseFilterOperator.NotContainsi]?: StrapiFilterValue
  [StrapiBaseFilterOperator.IsNull]?: boolean
  [StrapiBaseFilterOperator.NotNull]?: boolean
  [StrapiBaseFilterOperator.StartsWith]?: StrapiFilterValue
  [StrapiBaseFilterOperator.EndsWith]?: StrapiFilterValue
  [StrapiBaseFilterOperator.Between]?: [number, number]
}

interface ModelBaseFilter {
  id?: BaseFilter | Primitive
}

declare const exampleModelBaseFilter: StrapiBaseFilter<TestModel>;
expectType<ModelBaseFilter>(exampleModelBaseFilter)


interface ModelConditionFilter {
  [StrapiConditionFilterOperator.Or]?: ModelBaseFilter[]
  [StrapiConditionFilterOperator.And]?: ModelBaseFilter[]
}
expectTypeOf<StrapiConditionFilter<TestModel>>().toEqualTypeOf<ModelConditionFilter>()


interface TestDeepFilterModel {
  primitiveField?: string
  primitiveField2?: string
}

interface DeepFilter {
  primitiveField?: BaseFilter | Primitive
  primitiveField2?: BaseFilter | Primitive
  [StrapiConditionFilterOperator.Or]?: {
    primitiveField?: BaseFilter | Primitive
    primitiveField2?: BaseFilter | Primitive
  }[]
  [StrapiConditionFilterOperator.And]?: {
    primitiveField?: BaseFilter | Primitive
    primitiveField2?: BaseFilter | Primitive
  }[]
}

const Test:StrapiDeepFilter<TestDeepFilterModel> = {

}

declare const exampleStrapiFilter: StrapiDeepFilter<TestDeepFilterModel>;
expectType<DeepFilter>(exampleStrapiFilter);
expectTypeOf<DeepFilter>().toEqualTypeOf<StrapiDeepFilter<TestDeepFilterModel>>();
