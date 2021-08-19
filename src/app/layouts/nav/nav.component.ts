import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  tabActive = 'home' ;

  constructor( private router :Router) { }

  ngOnInit(): void {
  }

  changeTab(name){
    this.router.navigate(['/'+ name]);
    this.tabActive = name;
  }
}
