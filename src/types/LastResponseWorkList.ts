import { Work } from './Work'
import { Pagination } from './Pagination'

export interface LastResponseWorkList {
  workList: Work[] | null
  pagination: Pagination | null
}
