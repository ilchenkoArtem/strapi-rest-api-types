import { StrapiPaginationByOffcet, StrapiPaginationByPage } from ".";

export interface StrapiRestApi {
    pagination?: StrapiPaginationByOffcet | StrapiPaginationByPage
}