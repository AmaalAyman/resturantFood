import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { FoodsService } from 'src/app/Services/foods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fries.component.html',
  styleUrls: ['./fries.component.css']
})
export class FriesComponent {

  fries: Foodinfo[]=[];

  constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._FoodsService.getFries().subscribe({
      next:(res)=>{
        this.fries = res.recipes;
      },
     })
  }

  addCart(product:any):void{
    this._FoodsService.cart.push(product);
    this._ToastrService.success('Item Added To Your Cart');
    console.log(this._FoodsService.cart) 
  }

}
