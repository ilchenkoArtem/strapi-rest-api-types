import {expectTypeOf} from 'expect-type'
import {
  StrapiBaseFilter,
  StrapiBaseFilterOperator,
  StrapiConditionFilter,
  StrapiConditionFilterOperator,
  StrapiFilterValue
} from 'src/filters';
import {TestModel} from 'tests/tests-model.test';

interface ModelBaseFilter {
  id?: {
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
}
expectTypeOf<StrapiBaseFilter<TestModel>>().toEqualTypeOf<ModelBaseFilter>()


interface ModelConditionFilter {
  [StrapiConditionFilterOperator.Or]?: ModelBaseFilter[]
  [StrapiConditionFilterOperator.And]?: ModelBaseFilter[]
}
expectTypeOf<StrapiConditionFilter<TestModel>>().toEqualTypeOf<ModelConditionFilter>()
