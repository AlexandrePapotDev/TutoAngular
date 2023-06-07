import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list'

@Component({
  selector: 'app-root', // nom du composant personnalisé 
  templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS

  ngOnInit(): void {
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`)
  }

}


