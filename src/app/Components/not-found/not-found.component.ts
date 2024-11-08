import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from "../nav-blank/nav-blank.component";
import { NavAuthComponent } from "../nav-auth/nav-auth.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NavBlankComponent, NavAuthComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{

  token:any = ' ';

  ngOnInit(): void {
    
    if(localStorage.getItem('eToken') != null ){
      this.token = localStorage.getItem('eToken');
    }
}

}
