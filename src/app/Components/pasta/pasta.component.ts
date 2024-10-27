import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsService } from 'src/app/Services/foods.service';
import { Foodinfo } from 'src/app/Interfaces/foodinfo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent {

  pasta: Foodinfo[]=[];

  constructor(private _FoodsService:FoodsService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this._FoodsService.getPasta().subscribe({
      next:(res)=>{
        this.pasta = res.recipes;
      },
     })
  }

  addCart(product:any):void{
    this._FoodsService.cart.push(product);
    this._ToastrService.success('Item Added To Your Cart');
    console.log(this._FoodsService.cart) 
  }

}
