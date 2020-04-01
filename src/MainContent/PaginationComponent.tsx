import React from 'react'

interface Pagination {
  totalCount: number
  nextPage: number |null
  prevPage: number | null
}
interface Props {
  pagination: PaginationType
}
type PaginationType = Pagination | null

export const PaginationComponent: React.FC<Props> = props => {
  return (
    <div>
      {props.pagination && props.pagination.totalCount > 0 && (
        <>
          <div>全ページ数: {props.pagination.totalCount}</div>
          <div>
            {props.pagination.prevPage && (<div>前のエピソードを見る</div>)}
            {props.pagination.nextPage && (<div>次のエピソードを見る</div>)}
          </div>
        </>
      )}
    </div>
  )
}
