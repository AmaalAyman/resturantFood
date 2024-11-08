import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}

  errormsg:string = '';
  isLoading:boolean = false;

  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(/^\w{6,10}$/)]],
  });


  handleForm():void{
    const userData = this.loginForm.value;
    this._AuthService.loginData = this.loginForm.value;
    this.isLoading = true; 
   
    if(this.loginForm.valid == true){
     this._AuthService.login(userData).subscribe({
       next:(res)=> {
         if(res.message == 'success'){
            this.isLoading = false;
            localStorage.setItem('eToken', res.token);
            this._AuthService.saveUserData();
             this._Router.navigate(['/home']);
         }
       },
       error:(err)=>{
         this.isLoading = false;
         this.errormsg = err.error.message;
       }
     })
     }
    }



}
