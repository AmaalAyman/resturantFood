import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { FoodsService } from 'src/app/Services/foods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

cartData:Foodinfo[]=[];
totalPrice:number = 0;
price:any[] = [];

constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

ngOnInit(): void {
  
  this.cartData = this._FoodsService.cart;
  for(let i=0; this.cartData[i]; i++){
     this.price.push((this.cartData[i].social_rank/0.7).toString().slice(5,8));
    }

    for(let i=0; this.price[i]; i++){
      this.totalPrice = this.totalPrice + parseInt(this.price[i]);
     }

}

deleteItem(id:any){
  for(let i=0 ; this.cartData[i] ; i++){
    if(this.cartData[i].recipe_id == id){
      this.cartData.pop();
      this._ToastrService.success('Item Deleted Successfully', ' ', {timeOut: 5000});

    }
  }
}



}
