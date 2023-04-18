import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10_000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10_200,
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 200_000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  // onDelete(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
