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

export interface StrapiCreateUpdateDateDTO {
    createdAt: string | null,
    updatedAt: string | null
}

export interface StrapiBaseDTO {
    id: number;
}

export interface StrapiComponentDTO<Name extends string = string> extends StrapiBaseDTO {
    __component: Name
}

export interface StrapiImageFormatDTO {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string | null
    size: string
    width: number
    height: number
}

export type ImageFormats = 'large' | 'small' | 'medium' | 'thumbnail'

export interface StrapiImageDTO extends StrapiBaseDTO {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: null | string,
    provider: string,
    provider_metadata: null | string,
    createdAt: string,
    updatedAt: string
}
