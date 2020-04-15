// Deplication!!
interface Pagination {
  totalCount: number
  nextPage: number | null
  prevPage: number | null
}
export type PaginationType = Pagination | null
