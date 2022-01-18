import { Component } from '@angular/core';
import { GetCharactersByHouseService } from './services/get-characters-by-house.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {
  characters: any = []

  constructor(private getCharacters: GetCharactersByHouseService) { }

  // Cuando se cambia el valor de la lista desplegable se vuelve a pedir la data al servidor
  onHouseChange(value: string) {
    this.getCharacters.get(value)
      .subscribe((response: any) => {
        this.characters = response
      })
  }
}
