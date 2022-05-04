import {expectTypeOf} from 'expect-type'
import {
  StrapiBaseFilter,
  StrapiBaseFilterOperator,
  StrapiConditionFilter,
  StrapiConditionFilterOperator,
  StrapiDeepFilter,
  StrapiFilterValue
} from 'src/filters';
import {
  TestComplexModel,
  TestModel
} from 'tests/tests-model.test';

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
  id?: BaseFilter
}
expectTypeOf<StrapiBaseFilter<TestModel>>().toEqualTypeOf<ModelBaseFilter>()


interface ModelConditionFilter {
  [StrapiConditionFilterOperator.Or]?: ModelBaseFilter[]
  [StrapiConditionFilterOperator.And]?: ModelBaseFilter[]
}
expectTypeOf<StrapiConditionFilter<TestModel>>().toEqualTypeOf<ModelConditionFilter>()


interface ConditionFirstLevelFilter {
  primitiveField?: BaseFilter
}

interface DeepFilter {
  primitiveField?: BaseFilter
  [StrapiConditionFilterOperator.Or]?:  ConditionFirstLevelFilter[]
  [StrapiConditionFilterOperator.And]?: ConditionFirstLevelFilter[]
}
expectTypeOf<StrapiDeepFilter<TestComplexModel>>().toEqualTypeOf<DeepFilter>()
