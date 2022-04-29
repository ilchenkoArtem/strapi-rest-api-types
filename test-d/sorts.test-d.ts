import { TestModel, TestDataOnlyPopulate } from "./tests-model.test-d";
import type {StrapiSortByFieldArray, StrapiSortBySingleField} from "src/sort";
import {expectTypeOf} from 'expect-type'

/*----------- Sort by single field -----------*/
//Get get never if data model contain only populate
expectTypeOf<never>().toEqualTypeOf<StrapiSortBySingleField<TestDataOnlyPopulate>>();

//Get Only first level keys, not populate, not component
expectTypeOf<"id" | "id:desc" | "id:asc">().toEqualTypeOf<StrapiSortBySingleField<TestModel>>()
//Must be error if set not equal key

/*----------- Sort by array field -----------*/
//Get Only first level keys, not populate, not component in array
expectTypeOf<Array<"id" | "id:desc" | "id:asc">>().toEqualTypeOf<StrapiSortByFieldArray<TestModel>>();
//Get get never if data model contain only populate
expectTypeOf<never>().toEqualTypeOf<StrapiSortByFieldArray<TestDataOnlyPopulate>>()
