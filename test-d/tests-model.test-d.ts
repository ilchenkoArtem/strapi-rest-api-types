import {StrapiComponentDTO} from 'src/response-dto';

export type TestAddressModel = {
  street: string;
  city: string;
  state: string;
};

export type TestOptionsModel = {
  label: string;
  value: string;
};

export interface TestDataComponent extends StrapiComponentDTO {
  componentField1: string
  componentField2: string
}

export type TestDataOnlyPopulate = {
  address?: TestAddressModel;
  options?: TestOptionsModel[];
}

export type TestModel = {
  id: number;
  componentModel: TestDataComponent
} & TestDataOnlyPopulate ;
