import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10_000,
    },
    {
      name: 'Vegeta',
      power: 10_200,
    },
    {
      name: 'Cell',
      power: 200_000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDelete(index: number): void {
    this.characters.splice(index, 1);
  }
}
