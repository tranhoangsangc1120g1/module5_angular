import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public result: number;



  ngOnInit(): void {
  }


  public calculate(num1: string, num2: string, operator: string): number {
    let number1: number = parseInt(num1);
    let number2: number = parseInt(num2);

    switch (operator) {
      case "+":
        return this.result = number1 + number2;
      case "-":
        return this.result = number1 - number2;
      case "*":
        return this.result = number1 * number2;
      case "/":
        return this.result = number1 / number2;
    }
  }
}
