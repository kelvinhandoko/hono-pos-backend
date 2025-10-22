import z from 'zod'

export const baseResponseSchema = z.object({
  message: z.string(),
})

export const getQuerySchema = z.object({
  search: z.string().min(1).optional().describe('Search term to filter results'),
})

export const paginatedQuerySchema = z.object({
  page: z.number().min(1).optional().default(1).describe('The page number for pagination'),
  limit: z.number().min(1).max(100).optional().default(10).describe('The number of items per page for pagination'),
  takeAll: z.boolean().optional().default(false).describe('Whether to take all items without pagination'),
})

export const infiniteQuerySchema = z.object({
  cursor: z.string().optional().describe('The cursor for infinite scrolling pagination'),
  limit: z.number().min(1).max(100).optional().default(10).describe('The number of items to fetch for infinite scrolling pagination'),
})

export const sortEnum = z.enum(['asc', 'desc']).describe('Sort order: ascending or descending')

export const paginatedMetaSchema = z.object({
  currentPage: z.number().describe('The current page number'),
  isFirstPage: z.boolean().describe('Indicates if this is the first page'),
  isLastPage: z.boolean().describe('Indicates if this is the last page'),
  pageCount: z.number().describe('The total number of pages available'),
  totalCount: z.number().describe('The total number of items available'),
  nextPage: z.number().nullable().describe('The next page number, or null if on the last page'),
  previousPage: z.number().nullable().describe('The previous page number, or null if on the first page'),
})

export const infiniteMetaSchema = z.object({
  startCursor: z.string().nullable().describe('The cursor at the start of the current page'),
  endCursor: z.string().nullable().describe('The cursor at the end of the current page'),
  hasNextPage: z.boolean().describe('Indicates if there is a next page available'),
  hasPreviousPage: z.boolean().describe('Indicates if there is a previous page available'),
})
