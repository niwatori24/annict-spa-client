interface AnnictAPIType {
  episodesUrl: Function
  worksUrl: Function
}
export interface worksUrlParams {
  sortValue: string
  filterTitle: string
  page: number
}

export const AnnictAPI: AnnictAPIType = {
  episodesUrl: (workId: number, page: number | null) => {
    if(page === null) {
      return `https://api.annict.com/v1/episodes?sort_sort_number=desc&access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${workId}`
    } else {
      return `https://api.annict.com/v1/episodes?sort_sort_number=asc&access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${workId}&page=${page}`
    }
  },
  worksUrl: (params: worksUrlParams) => {
    let queryString: string = ''
    if(params.sortValue) {
      queryString = `${queryString}&sort_season=${params.sortValue}`
    } else {
      queryString = `${queryString}&sort_season=desc`
    }
    if(params.filterTitle) {
      queryString = `${queryString}&filter_title=${params.filterTitle}`
    }
    if(params.page) {
      queryString = `${queryString}&page=${params.page}`
    }

    if(queryString === '') {
      return `https://api.annict.com/v1/works?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}`
    } else {
      return `https://api.annict.com/v1/works?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&${queryString}`
    }
  }
}
