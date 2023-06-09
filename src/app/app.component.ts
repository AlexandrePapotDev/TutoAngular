import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list'

@Component({
  selector: 'app-root', // nom du composant personnalisé 
  templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon|undefined

  ngOnInit(): void {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: number){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`)
      this.pokemonSelected = pokemon
    }
    else{
      console.log(`Vous avez demandé un Pokemon qui n'existe pas`)
      this.pokemonSelected = pokemon      
    }
  }

}


