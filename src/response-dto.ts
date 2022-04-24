type StrapiPaginationWithTotalDTO<WithTotal extends boolean = true> = WithTotal extends true ? { total: number } : never

export type StrapiPaginatioByPageDTO<WithTotal extends boolean = true> = {
    page: number,
    pageSize: number,
    pageCount: number,
} & StrapiPaginationWithTotalDTO<WithTotal>

export type StrapiPaginatioByOffsetDTO<WithTotal extends boolean = true> = {
    start: number,
    limit: number
} & StrapiPaginationWithTotalDTO<WithTotal>

export interface StrapiSingelTypeDTO<Model> {
    data: Model
    meta: {}
}

export interface StrapiCollectionDTO<Model, PaginationType extends 'page' | 'offset' = 'page', WithTotal extends boolean = true> {
    data: Model[]
    meta: {
        pagination: PaginationType extends 'page' ? StrapiPaginatioByPageDTO<WithTotal> : StrapiPaginatioByOffsetDTO<WithTotal>
    }
}