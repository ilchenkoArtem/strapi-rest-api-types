import {TestComplexModel} from 'tests/tests-model.test';
import {StrapiDeepFilter} from 'src/filters';


const Test:StrapiDeepFilter<TestComplexModel> = {
  $or: [
    {
      primitiveField: {

      }
    }
  ],
  $and: [
    {
      primitiveField: {

      }
    }
  ],
  primitiveField: {

  }
}

console.log('Test', Test)
