import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  // en nombre que se ponga en el parámetro al input, será usado en el selector
  // si Input() no recibe parámetro, se usa el nombre de la propiedad que decora
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
}
