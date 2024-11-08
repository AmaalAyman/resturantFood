import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { FoodsService } from 'src/app/Services/foods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent {

  
  salad: Foodinfo[]=[];

  constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._FoodsService.getSalad().subscribe({
      next:(res)=>{
        this.salad = res.recipes;
      },
     })
  }

  addCart(product:any):void{
    this._FoodsService.cart.push(product);
    this._ToastrService.success('Item Added To Your Cart');
    console.log(this._FoodsService.cart) 
  }

}
