import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  @Input() cardInfo =    {
    image : "./../../../assets/images/cards/avatar.png",
    price : "Ask For Price"  ,
    priceUnit : "AED",
    title : "No Title",
    companyImage : "./../../../assets/images/cards/avatar.png",
    city : "No City",
    date : "Today"
  } ;

  constructor() { }

  ngOnInit(): void {
  }

}
