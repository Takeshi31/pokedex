export interface IListResponse {
  count: number
  next: string
  previous: any
  results: IPokemonDataBasic[]
}

export interface IPokemonDataBasic {
  name: string
  url: string
}
