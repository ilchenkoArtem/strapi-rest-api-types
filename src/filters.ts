import {
  Clear,
  GetStrapiModelByPopulate,
  IsAvailableRelationForDeepFilter,
  StrapiDataModel,
  StrapiModelWithoutRelation
} from 'src/helpers';

export type StrapiFilterValue = string | number | boolean

export const enum StrapiPublicationState {
  /** returns only published entries (default) */
  Live = 'live',
  /** returns both draft entries & published entries */
  Preview = 'preview',
}

export const enum StrapiSortType {
  Ascending = 'asc',
  Descending = 'desc',
}

export const enum StrapiConditionFilterOperator {
  Or = '$or',
  And = '$and',
}

export const enum StrapiBaseFilterOperator {
  /** Equal */
  Equal = '$eq',
  /** Not equal */
  NotEqual = '$ne',
  /** Less than */
  LessThan = '$lt',
  /** Less than or equal to */
  LessThanOrEqualTo = '$lte',
  /** Greater than */
  GreaterThan = '$gt',
  /** Greater than or equal to */
  GreaterThanOrEqualTo = '$gte',
  /** Included in an array */
  IncludedInAnArray = '$in',
  /** Not included in an array */
  NotIncludedInAnArray = '$notIn',
  /** Contains (case-sensitive) */
  ContainsCaseSensitive = '$contains',
  /** Does not contain (case-sensitive) */
  NotContainsCaseSensitive = '$notContains',
  /** Contains */
  Containsi = '$containsi',
  /** Does not contain */
  NotContainsi = '$notContainsi',
  /** Is null */
  IsNull = '$null',
  /** Is not null */
  NotNull = '$notNull',
  /** Is between */
  Between = '$between',
  /** Starts with */
  StartsWith = '$startsWith',
  /** Ends with */
  EndsWith = '$endsWith',
}

type StrapiOperatorsKeysWithSpecialTypes =
  StrapiBaseFilterOperator.IncludedInAnArray |
  StrapiBaseFilterOperator.NotIncludedInAnArray |
  StrapiBaseFilterOperator.NotNull |
  StrapiBaseFilterOperator.IsNull |
  StrapiBaseFilterOperator.Between

export type StrapiFilterByBaseOperators = {
  [Key in Exclude<StrapiBaseFilterOperator, StrapiOperatorsKeysWithSpecialTypes>]?: StrapiFilterValue
} & {
  [StrapiBaseFilterOperator.IncludedInAnArray]?: StrapiFilterValue[]
  [StrapiBaseFilterOperator.NotIncludedInAnArray]?: StrapiFilterValue[]
  [StrapiBaseFilterOperator.NotNull]?: boolean
  [StrapiBaseFilterOperator.IsNull]?: boolean
  [StrapiBaseFilterOperator.Between]?: [number, number];
}

export type StrapiBaseFilter<Model extends StrapiDataModel> = {
  [Key in keyof StrapiModelWithoutRelation<Model>]?: StrapiFilterByBaseOperators
}

export type StrapiConditionFilter<Model extends StrapiDataModel> = {
  [Key in StrapiConditionFilterOperator]?: StrapiBaseFilter<Clear<Model>>[]
}

export type StrapiDeepFilter<Model extends StrapiDataModel> = StrapiBaseFilter<Model> | StrapiConditionFilter<Model>
export type StrapiDeepFilter2<Model extends StrapiDataModel> = StrapiBaseFilter<Model> | StrapiConditionFilter<Model> & {
  [Key in keyof Model as IsAvailableRelationForDeepFilter<Model[Key]> extends true ? Key : never]?: StrapiDeepFilter<GetStrapiModelByPopulate<Model[Key]>>
}
