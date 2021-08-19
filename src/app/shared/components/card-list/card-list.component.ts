import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  allCards = [
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    }
  ];

  recommendendCards = [
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 300  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    }
  ];

  popularCards = [
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 200  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 200  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 200  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    },
    {
      image : "./../../../assets/images/cards/product.jpeg",
      price : 200  ,
      priceUnit : "AED",
      title : "ملابس رياضية",
      companyImage : "./../../../assets/images/cards/userImg.jpeg",
      city : "Riyadh",
      date : "9 hours ago"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
