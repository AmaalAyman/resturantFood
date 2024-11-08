import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  errormsg:string = '';
 

  constructor( private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService){}

  addressForm:FormGroup = this._FormBuilder.group({
    name:['',[Validators.required]],
    details:['',[Validators.required]],
    phone:['',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:['',[Validators.required]],
  });


  handleForm():void{
    const userData = this.addressForm.value;
   
    if(this.addressForm.valid == true){
      this._AuthService.addAddress(userData).subscribe({
       next:(res)=>{
         if(res.status == "success"){
          this._ToastrService.success(res.message, ' ', {timeOut: 5000});
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


