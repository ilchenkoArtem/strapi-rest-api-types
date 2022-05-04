import {StrapiDataModel, StrapiModelWithoutRelation} from "src/helpers";
import {IsNever} from 'expect-type';

export const enum StrapiSortType {
  Ascending = "asc",
  Descending = "desc",
}

export type StrapiSortBySingleField<
  DataModel extends StrapiDataModel,
  Key = keyof StrapiModelWithoutRelation<DataModel>
> = Key extends string ? `${Key}:${StrapiSortType}` | Key : never;


export type StrapiSortByFieldArray<
  DataModel extends StrapiDataModel,
> = IsNever<StrapiSortBySingleField<DataModel>> extends true ? never : Array<StrapiSortBySingleField<DataModel>>

export type StrapiSort<DataModel extends StrapiDataModel> = StrapiSortBySingleField<DataModel> | StrapiSortByFieldArray<DataModel>
