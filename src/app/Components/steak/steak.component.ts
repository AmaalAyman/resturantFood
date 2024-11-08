import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { FoodsService } from 'src/app/Services/foods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-steak',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steak.component.html',
  styleUrls: ['./steak.component.css']
})
export class SteakComponent {

  steak: Foodinfo[]=[];

  constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._FoodsService.getSteak().subscribe({
      next:(res)=>{
        this.steak = res.recipes;
      },
     })
  }

  addCart(product:any):void{
    this._FoodsService.cart.push(product)
    this._ToastrService.success('Item Added To Your Cart');
    console.log(this._FoodsService.cart) 
  }
}
