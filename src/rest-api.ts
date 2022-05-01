import { StrapiPagination } from 'src/pagination';
import {StrapiSort} from 'src/sort';
import {StrapiDataModel} from 'src/helpers';

export interface StrapiRestApi<DataModel extends StrapiDataModel> {
    pagination?: StrapiPagination
    sort?: StrapiSort<DataModel>
}
