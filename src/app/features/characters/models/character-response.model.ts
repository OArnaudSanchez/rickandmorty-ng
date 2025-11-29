import { PaginationResponse } from "src/app/core/models/pagination.model"

export interface ApiResponse {
  info: PaginationResponse
  results: CharacterResponse[]
}

//TODO: refactor these interfaces to avoid code duplication


export interface CharacterResponse {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}
