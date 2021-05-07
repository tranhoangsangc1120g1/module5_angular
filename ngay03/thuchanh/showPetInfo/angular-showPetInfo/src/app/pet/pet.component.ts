import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  pet:Pet={
    name:"bao ngoc",
    image:""
}
  constructor() { }

  ngOnInit(): void {
  }

}
