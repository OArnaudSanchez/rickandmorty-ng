import { PaginationResponse } from "src/app/core/models/pagination.model"

// TODO: there are multiple interfaces called Api Response
export interface ApiResponse {
  info: PaginationResponse
  results: LocationResponse[]
}

export interface LocationResponse {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
