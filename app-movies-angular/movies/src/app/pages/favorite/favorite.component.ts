import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeaderListComponent } from '../../shared/components/header-list/header-list.component';
import { ListComponent } from '../../shared/components/list/list.component';

@Component({
  selector: 'app-favorite',
  imports: [NgIf, CommonModule, ListComponent, HeaderListComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  favorites$: Observable<any> = of({});
  private router = inject(Router);

  ngOnInit() {
    this.getFavorites();
  }
  ngAfterContentChecked() {
    this.getFavorites();
  }
  callEvent(rote: string){
    this.router.navigate([`/${rote}`]);
  }
  private getFavorites() {
    this.favorites$ = of(JSON.parse(localStorage.getItem('favoritos') || '[]'));
  }
}
