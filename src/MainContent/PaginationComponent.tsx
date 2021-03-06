import React from 'react'

interface Pagination {
  totalCount: number
  nextPage: number | null
  prevPage: number | null
}
interface Props {
  pagination: PaginationType
  unit: string
  nextPageHandleClick: Function
  prevPageHandleClick: Function
}
type PaginationType = Pagination | null

export const PaginationComponent: React.FC<Props> = props => {
  return (
    <div>
      {props.pagination && props.pagination.totalCount > 0 && (
        <>
          <div>全{props.pagination.totalCount}話</div>
          <div>
            {props.pagination.prevPage && (
              <div><a href='#' onClick={(e) => {
                if(props.pagination && props.pagination.prevPage) {
                  props.prevPageHandleClick(props.pagination.prevPage)
                  e.preventDefault()
                }
              }}>前の{props.unit}を見る</a></div>
            )}
            {props.pagination.nextPage && (
              <div><a href='#' onClick={(e) => {
                if(props.pagination && props.pagination.nextPage) {
                  props.nextPageHandleClick(props.pagination.nextPage)
                  e.preventDefault()
                }
              }}>次の{props.unit}を見る</a></div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
