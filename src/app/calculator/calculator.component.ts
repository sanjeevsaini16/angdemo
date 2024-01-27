// calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <div>
      <label for="num1">Enter number 1:</label>
      <input type="number" id="num1" [(ngModel)]="num1" />
      <br />
      <label for="num2">Enter number 2:</label>
      <input type="number" id="num2" [(ngModel)]="num2" />
      <br />
      <button (click)="calculate()">Calculate</button>
      <h2 *ngIf="result !== undefined">Result: {{ result }}</h2>
    </div>
  `,
  styles: [],
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | undefined;

  calculate() {
    this.result = this.num1 + this.num2;
  }
}
