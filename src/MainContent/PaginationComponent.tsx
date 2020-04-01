import React from 'react'

interface Pagination {
  totalCount: number
  nextPage: number |null
  prevPage: number | null
}
interface Props {
  pagination: PaginationType
  nextPageHandleClick: Function
  prevPageHandleClick: Function
}
type PaginationType = Pagination | null

export const PaginationComponent: React.FC<Props> = props => {
  return (
    <div>
      {props.pagination && props.pagination.totalCount > 0 && (
        <>
          <div>全ページ数: {props.pagination.totalCount}</div>
          <div>
            {props.pagination.prevPage && (
              <div><a onClick={(e) => {props.prevPageHandleClick(); e.preventDefault()}}>前のエピソードを見る</a></div>
            )}
            {props.pagination.nextPage && (
              <div><a onClick={(e) => {props.nextPageHandleClick(); e.preventDefault()}}>次のエピソードを見る</a></div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
