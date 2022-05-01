import {StrapiBaseDTO, StrapiComponentDTO} from 'src/response-dto';

export interface TestComponent extends StrapiComponentDTO {
  title: string;
}

export type TestDynamicZone = TestComponent[]

export interface TestDefaultObjectRelation extends StrapiBaseDTO {
  street: string;
}

export type TestDefaultArrayRelation = TestDefaultObjectRelation[]

export type TestModel = {
  id?: number;
}

export interface TestComplexModel {
  primitiveField: string
  defaultObjectRelation?: TestDefaultObjectRelation
  defaultArrayRelation?: TestDefaultArrayRelation
  dynamicZoneRelation?: TestDynamicZone
  componentRelation?: TestComponent
}

export type TestOnlyRelationModel = Pick<
  TestComplexModel,
  'defaultArrayRelation' | 'dynamicZoneRelation' | 'componentRelation' | 'defaultObjectRelation'
>
