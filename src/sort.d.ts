import {isNever, StrapiDataModel, StrapiModelWithoutPopulate} from "src/helpers";

export const enum StrapiSortType {
  Ascending = "asc",
  Descending = "desc",
}

export type StrapiSortBySingleField<
  DataModel extends StrapiDataModel,
  Key = keyof StrapiModelWithoutPopulate<DataModel>
> = Key extends string ? `${Key}:${StrapiSortType}` | Key : never;


export type StrapiSortByFieldArray<
  DataModel extends StrapiDataModel,
> = isNever<StrapiSortBySingleField<DataModel>> extends true ? never : Array<StrapiSortBySingleField<DataModel>>

export type StrapiSort<DataModel extends StrapiDataModel> = StrapiSortBySingleField<DataModel> | StrapiSortByFieldArray<DataModel>
