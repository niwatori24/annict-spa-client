interface AnnictAPIType {
  episodesUrl: Function
  worksUrl: Function
}

export const AnnictAPI: AnnictAPIType = {
  episodesUrl: (workId: number, page: number | null) => {
    if(page === null) {
      return `https://api.annict.com/v1/episodes?sort_sort_number=desc&access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${workId}`
    } else {
      return `https://api.annict.com/v1/episodes?sort_sort_number=asc&access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${workId}&page=${page}`
    }
  },
  worksUrl: () => {
    return `https://api.annict.com/v1/works?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}`
  }
}
