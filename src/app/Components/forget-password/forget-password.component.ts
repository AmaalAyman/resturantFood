import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router,private _ToastrService:ToastrService){}

  errormsg:string = '';
  isLoading:boolean = false;
  forget:boolean = true;
  reset:boolean = false;
  new:boolean = false;

  emailForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.email,Validators.required]],
  });


  handleForgetForm():void{
    const userData = this.emailForm.value;
    this.isLoading = true; 
   
    if(this.emailForm.valid == true){
     this._AuthService.forgetPassword(userData).subscribe({
       next:(res)=> {
         if(res.statusMsg == 'success'){
            this.isLoading = false;
            this.forget = false;
            this.reset = true;
            this.new = false;
            console.log(res)
         }
       },
       error:(err)=>{
         this.isLoading = false;
         this.errormsg = err.error.message;
       }
     })
     }
    }


    resetForm:FormGroup = this._FormBuilder.group({
      resetCode:['',[Validators.required]],
    });
  
    handleResetForm():void{
      const resetCode = this.resetForm.value;
      this.isLoading = true; 
     
        this._AuthService.resetPassword(resetCode).subscribe({
          next:(res)=>{
            if(res.status == "Success"){
              this.isLoading = false;
              this.forget = false;
              this.reset = false;
              this.new = true;
            }
              console.log(res)
          },error:(err)=>{
            this.errormsg = err.error.message;
          }
        })
      }
    

     newForm:FormGroup = this._FormBuilder.group({
      email:['',[Validators.email,Validators.required]],
      newPassword:['',[Validators.required,Validators.pattern(/^\w{6,10}$/)]],
    });
  
  
    handleNewForm():void{
      const data = this.newForm.value;
      this.isLoading = true; 
     
      if(this.newForm.valid == true){
      this._AuthService.newPassword(data).subscribe({
        next:(res)=>{
             this._ToastrService.success('Reset Your Password Successfully');
             this._Router.navigate(['/login']);
             console.log(res)
        },error:(err)=>{
           this.isLoading = false;
           this.errormsg = err.error.message;
         }
       })
       }
     }
  


}
