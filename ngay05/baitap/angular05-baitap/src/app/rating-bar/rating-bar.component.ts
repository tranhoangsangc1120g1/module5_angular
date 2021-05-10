import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss']
})
export class RatingBarComponent implements OnInit {
  value:[string,number][]=[['veryBad',1],['Bad',2],['good',3],['veryGood',4],['perfect',5]]
  active:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }


}
