type StrapiPaginationWithTotalDTO<WithTotal extends boolean = true> = WithTotal extends true ? { total: number } : never

export type StrapiPaginationByPageDTO<WithTotal extends boolean = true> = {
    page: number,
    pageSize: number,
    pageCount: number,
} & StrapiPaginationWithTotalDTO<WithTotal>

export type StrapiPaginationByOffsetDTO<WithTotal extends boolean = true> = {
    start: number,
    limit: number
} & StrapiPaginationWithTotalDTO<WithTotal>

export interface StrapiSingleTypeDTO<Model> {
    data: Model
    meta: {}
}

export interface StrapiCollectionDTO<Model, PaginationType extends 'page' | 'offset' = 'page', WithTotal extends boolean = true> {
    data: Model[]
    meta: {
        pagination: PaginationType extends 'page' ? StrapiPaginationByPageDTO<WithTotal> : StrapiPaginationByOffsetDTO<WithTotal>
    }
}

export interface StrapiComponentDTO<Name extends string = string> {
    id: number
    __component: string
}
