import { StrapiPagination } from 'src/pagination';
import {StrapiSort} from 'src/sort';

export interface StrapiRestApi {
    pagination?: StrapiPagination
    sort?: StrapiSort
}
