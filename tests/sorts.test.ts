import {TestComplexModel, TestOnlyRelationModel} from "tests/tests-model.test";
import type {StrapiSortByFieldArray, StrapiSortBySingleField} from "src/sort";
import {expectTypeOf} from 'expect-type'
import {StrapiSort} from 'src/sort';

/*----------- Sort by single field -----------*/
//Get never if data model contain only populate
type SortBySingleFieldForComplexModel = "primitiveField" | "primitiveField:desc" | "primitiveField:asc"
expectTypeOf<StrapiSortBySingleField<TestComplexModel>>().toEqualTypeOf<SortBySingleFieldForComplexModel>();

/*----------- Sort by array field -----------*/
//Get Only first level keys, not populate, not component in array
type SortByFieldArrayComplexModel = Array<SortBySingleFieldForComplexModel>
expectTypeOf<StrapiSortByFieldArray<TestComplexModel>>().toEqualTypeOf<SortByFieldArrayComplexModel>();

//Get get never if data model contain only populate
expectTypeOf<StrapiSortByFieldArray<TestOnlyRelationModel>>().toBeNever()

/*----- All sort option -------*/
expectTypeOf<StrapiSort<TestComplexModel>>().toEqualTypeOf<SortBySingleFieldForComplexModel | SortByFieldArrayComplexModel>()
