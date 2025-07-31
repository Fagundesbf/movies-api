import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { IMovieResponse } from '../../interfaces/movie.interface';
import { HeaderListComponent } from '../../shared/components/header-list/header-list.component';
import { ListComponent } from '../../shared/components/list/list.component';
import { MoviesService } from '../../shared/services/movies/movies.service';

@Component({
  selector: 'app-home',
  imports: [NgIf, CommonModule, ListComponent, HeaderListComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  movies$: Observable<any> = of({});

  private moviesService = inject(MoviesService);
  private router = inject(Router);

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.movies$ = this.moviesService.getListMovies().pipe(
      map((result: IMovieResponse) => result.data),
      catchError((error) => {
        sessionStorage.removeItem('Bearer');
        this.router.navigate(['/login']);
        return of();
      })
    );
  }

  callEvent(rote: string){
    this.router.navigate([`/${rote}`]);
  }

}
