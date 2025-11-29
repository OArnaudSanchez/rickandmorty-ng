import { PaginationResponse } from "src/app/core/models/pagination.model"

export interface ApiResponse {
  info: PaginationResponse
  results: EpisodeResponse[]
}

export interface EpisodeResponse {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
