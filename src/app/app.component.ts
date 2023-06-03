import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nom du composant personalisé 
  template: `<h1>Welcome to {{title}}!</h1>`
})
export class AppComponent {
  title = 'ng-pokemon-app';
}
