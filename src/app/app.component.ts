import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // nom du composant personnalisé 
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre','Salameche','Carapuce']

  ngOnInit(): void {
    console.table(this.pokemonList)
    this.selectPokemon('Bulbizarre')
  }

  selectPokemon(pokemonName: string){
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`)
  }

}


