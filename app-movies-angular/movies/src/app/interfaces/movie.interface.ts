

export interface IMovieResponse {
  data: IMovie[];
  filters: IFilters[];
  pagination: IPagination[];
}

export interface IMovie {
  id: number;
  nome: string;
  anoLancamento: number;
  descricao: string;
  genero: string;
  favorite?: boolean;
}

export interface IFilters {
  genero?: string;
  order: string;
  sortBy: string;
}

export interface IPagination {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  moviesPerPage: number;
  totalMovies: number;
  totalPages: number;
}
