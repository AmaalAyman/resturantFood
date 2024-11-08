import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  address:any;
  errormsg:string = '';
  addID:string = '';
  userId:string = '';
  email:string = this._AuthService.loginData.email;
  pass:string = this._AuthService.loginData.password;



  constructor(private _AuthService:AuthService,  private _ToastrService:ToastrService, private _Router:Router){}



  ngOnInit(): void {
    this.userData();
    this.getAddress();
    console.log(this._AuthService.loginData)
  }

  userData():void{
    this._AuthService.saveUserData();
    this.user = this._AuthService.userData;
    console.log(this._AuthService.userData)
  }

  deleteAddress():void{
    this._AuthService.deleteAddress(this.userId).subscribe({
      next:(res)=>{
        if(res.status == 'success'){
          this.addID = '';
          this.userId = '';
          this._ToastrService.success(res.message , ' ', {timeOut: 5000});
         
        }
      },
      error:(err)=>{
        this.errormsg = err.error.message;
      }
    });
  }

  getAddress():void{
    this._AuthService.getAddress().subscribe({
      next:(res)=>{
       
        for(let i=0; res.data[i]; i++){
          if(res.data[i]._id == res.data[i]._id){
          this.addID = res.data[i]._id;
          this.userId = res.data[i]._id; 
          this.address = res.data[i];
        }
        
      }
       
        
      
      }
    })
  }

  

}
