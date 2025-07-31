import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-list',
  imports: [],
  templateUrl: './header-list.component.html',
  styleUrl: './header-list.component.scss'
})
export class HeaderListComponent {
 @Output() action =  new EventEmitter<string>();
 @Input() titleButton: string = '';
 @Input() redirect: string = '';
 @Input() title: string = '';

  redirection(){
    this.action.emit(this.redirect);
  }
}
