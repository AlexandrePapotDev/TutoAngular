import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nom du composant personnalisé 
  template: `<h1>Welcome to {{ pokemons[1] }}!</h1>`
})
export class AppComponent {
  pokemons = ['Bulbizarre,','Salameche','Carapuce']
}


