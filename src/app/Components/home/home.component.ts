import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FoodsService } from 'src/app/Services/foods.service';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  somePizza: Foodinfo[]=[];
  somePasta: Foodinfo[]=[];
  someSalad: Foodinfo[]=[];
  someSteak: Foodinfo[]=[];
  someChicken: Foodinfo[]=[];
  someSeaFood: Foodinfo[]=[];
  someFries: Foodinfo[]=[];
  
  
  constructor(private _FoodService:FoodsService, private _ToastrService:ToastrService){}

  
  ngOnInit(): void {
    this.displayPizza();
    this.displayPasta();
    this.displaySalad();
    this.displaySteak();
    this.displayChicken();
    this.displaySeaFood();
    this.displayFries();
  }


  displayPizza():void{
       this._FoodService.getPizza().subscribe({
        next:(res)=>{
          this.somePizza = res.recipes;
        },
       })
  }


  displayPasta():void{
    this._FoodService.getPasta().subscribe({
     next:(res)=>{
       this.somePasta = res.recipes;
     },
    })
}

displaySalad():void{
  this._FoodService.getSalad().subscribe({
   next:(res)=>{
     this.someSalad = res.recipes;
   },
  })
}

displaySteak():void{
  this._FoodService.getSteak().subscribe({
   next:(res)=>{
     this.someSteak = res.recipes;
   },
  })
}

displayChicken():void{
  this._FoodService.getCheckin().subscribe({
   next:(res)=>{
     this.someChicken = res.recipes;
   },
  })
}

displaySeaFood():void{
  this._FoodService.getSeaFood().subscribe({
   next:(res)=>{
     this.someSeaFood = res.recipes;
   },
  })
}

displayFries():void{
  this._FoodService.getFries().subscribe({
   next:(res)=>{
     this.someFries = res.recipes;
   },
  })
}

addCart(product:any):void{
  this._FoodService.cart.push(product);
  this._ToastrService.success('Item Added To Your Cart');
  console.log(this._FoodService.cart) 

}

  homeOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplay:true,
    navText: ['', ''],
    items:1
  }

  foodOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplay:true,
    autoplaySpeed: 700,
    navText: ['', ''],
    items:4
  }
   
}