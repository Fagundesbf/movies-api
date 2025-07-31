import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IMovie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-list',
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() movieDetails: any;

  selectFavorite(movie: IMovie) {
    movie.favorite = !movie.favorite;
    console.log(movie)
    this.updateFavorites();
  }

  private updateFavorites() {
    const favorites = this.movieDetails.filter((m: IMovie) => m.favorite);
    localStorage.setItem(
      'favoritos',
      JSON.stringify(favorites.map((m: IMovie) => m))
    );
  }
}
