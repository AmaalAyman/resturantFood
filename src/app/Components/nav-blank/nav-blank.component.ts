import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FoodsService } from 'src/app/Services/foods.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {

 

  constructor(private _Router:Router, private _FoodsService:FoodsService){}
  


  logOut():void{
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login']);
  }

  


}
