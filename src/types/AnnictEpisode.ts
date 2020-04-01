export interface AnnictEpisode {
  id: number
  number: number | null
  number_text: string
  sort_number: number
  title: string
  records_count: number
  record_comments_count: number
  work: null
  prev_episode: number
  next_episode: number
}

