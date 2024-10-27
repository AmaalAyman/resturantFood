import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor( private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService){}

  errormsg:string = '';
 

  passwordForm:FormGroup = this._FormBuilder.group({
    currentPassword:['',[Validators.required]],
    password:['',[Validators.required]],
    rePassword:[''],
  }, {validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    let password = group.get('password');
    let rePassword = group.get('rePassword');
  
  
    if(rePassword?.value == null || ''){
      rePassword?.setErrors({ required: true})
    }else if(password?.value != rePassword?.value)
     rePassword?.setErrors({ misMatch: true })
  }


  handleForm():void{
    const userData = this.passwordForm.value;
   
    if(this.passwordForm.valid == true){
      this._AuthService.changePassword(userData).subscribe({
        next:(res)=> {
          if(res.message == 'success'){
            this._AuthService.loginData.password = this.passwordForm.value.password;
            this._ToastrService.success('Your Password Changed Successfully', ' ', {timeOut: 5000});
            this._Router.navigate(['/profile']);
          }
        },
        error:(err)=>{
          this.errormsg = err.error.message;
        }
      })
      }
  }
}
