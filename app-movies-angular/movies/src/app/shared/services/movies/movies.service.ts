import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IMovieResponse } from '../../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private httpClient = inject(HttpClient);

  getListMovies(
    page?: number,
    limit?: number,
    sortBy?: string,
    order?: string,
    genere?: string
  ) {
    let params = new HttpParams();
    page ? (params = params.set('page=', page)) : 1;
    limit ? (params = params.set('&limit=', limit)) : 10;
    sortBy ? (params = params.set('&sortBy=', sortBy)) : 'nome';
    order ? (params = params.set('&order=', order)) : 'asc';
    genere ? (params = params.set('&genere=', genere)) : '';

    return this.httpClient.get<IMovieResponse>(`${environment.urlRequest}/movies`, {
      params,
    });
  }
  getFilters() {
    return this.httpClient.get<any>(`${environment.urlRequest}/movies/filters`);
  }
}
