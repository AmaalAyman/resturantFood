import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsService } from 'src/app/Services/foods.service';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chicken',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent {

  chicken: Foodinfo[]=[];

  constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._FoodsService.getCheckin().subscribe({
      next:(res)=>{
        this.chicken = res.recipes;
      },
     })
  }


  addCart(product:any):void{
    this._FoodsService.cart.push(product);
    this._ToastrService.success('Item Added To Your Cart');
    console.log(this._FoodsService.cart) 
  }
  
}
