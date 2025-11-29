
export interface ApiResponse<T> {
  info: PaginationResponse
  results: T[]
}

export interface PaginationResponse {
  count: number
  pages: number
  next: string
  prev: string
}