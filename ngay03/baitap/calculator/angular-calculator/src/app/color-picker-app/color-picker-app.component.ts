import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-app',
  templateUrl: './color-picker-app.component.html',
  styleUrls: ['./color-picker-app.component.scss']
})
export class ColorPickerAppComponent implements OnInit {
  public colorChart:string;


  constructor() { }

  ngOnInit(): void {
  }
  changeColor(){}
}
