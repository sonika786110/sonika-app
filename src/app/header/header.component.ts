import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) { }

  navigateToHome() {
    console.log("Home Clicked");
    this.router.navigate(['home']);
  };
  

  navigateToWomen() {
    console.log("Women Clicked");
    this.router.navigate(['women']);
  };
  

  navigateToMen() {
    console.log("Men Clicked");
    this.router.navigate(['men']);
  };
    
  
  navigateToSale() {
    console.log("Sale Clicked");
    this.router.navigate(['sale']);
  };
  

  navigateToGifting() {
    console.log("Gifting Clicked");
    this.router.navigate(['gifting']);
  };
  

  



}
