export interface StrapiPaginationByPage {
    /** 
     * @default 1
     * @description Page number	
     */
    page?: number
    /** 
     * @default 25 
     * @description Page size
    */
    pageSize?: number
    /** 
     * @default true 
     * @description Adds the total numbers of entries and the number of pages to the response
    */
    withCount?: boolean
}

export interface StrapiPaginationByOffcet {
    /** 
     * @default 0
     * @description Start value (i.e. first entry to return)	
     */
    start?: number
    /** 
     * @default 25 
     * @description Number of entries to return	
    */
    limit?: number
    /** 
     * @default true 
     * @description Toggles displaying the total number of entries to the response	
    */
    withCount?: boolean
}
