interface AnnictAPIType {
  episodesUrl: Function
  worksUrl: Function
}

export const AnnictAPI: AnnictAPIType = {
  episodesUrl: (workId: number) => {
    const url: string = `https://api.annict.com/v1/episodes?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${workId}`
    return url
  },
  worksUrl: () => {
    const url = `https://api.annict.com/v1/works?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}`
    return url
  }
}
