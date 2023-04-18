import { Component } from '@angular/core';

@Component({
  selector: 'counter-app',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="sumar(+2)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="restar()">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  // con parámetro
  sumar(value: number): void {
    this.counter += value;
  }

  // sin parámetro
  restar(): void {
    this.counter -= 1;
  }

  reset() {
    this.counter = 10;
  }
}
