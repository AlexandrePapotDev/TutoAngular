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
  }

  selectPokemon(event: MouseEvent){
    const index: number = +(event.target as HTMLInputElement).value // + pour forcer le cast en number
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`)
  }

}


