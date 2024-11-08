import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [

  {path:'', loadComponent:()=>import('src/app/Layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent), children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent:()=>import('src/app/Components/login/login.component').then((m)=>m.LoginComponent), title:'Login'},
    {path:'signup', loadComponent:()=>import('src/app/Components/signup/signup.component').then((m)=>m.SignupComponent), title:'Signup'},
    {path:'forgetPass', loadComponent:()=>import('src/app/Components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent), title:'Forget Password'},
   
]},


  {path:'',canActivate:[authGuard], loadComponent:()=>import('src/app/Layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent), children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadComponent:()=>import('src/app/Components/home/home.component').then((m)=>m.HomeComponent), title:'Home'},
    {path:'pizza', loadComponent:()=>import('src/app/Components/pizza/pizza.component').then((m)=>m.PizzaComponent), title:'Pizza'},
    {path:'pasta', loadComponent:()=>import('src/app/Components/pasta/pasta.component').then((m)=>m.PastaComponent), title:'Pasta'},
    {path:'salad', loadComponent:()=>import('src/app/Components/salad/salad.component').then((m)=>m.SaladComponent), title:'Salad'},
    {path:'steak', loadComponent:()=>import('src/app/Components/steak/steak.component').then((m)=>m.SteakComponent), title:'Steak'},
    {path:'chicken', loadComponent:()=>import('src/app/Components/chicken/chicken.component').then((m)=>m.ChickenComponent), title:'Chicken'},
    {path:'seafood', loadComponent:()=>import('src/app/Components/seafood/seafood.component').then((m)=>m.SeafoodComponent), title:'Sea Food'},
    {path:'fries', loadComponent:()=>import('src/app/Components/fries/fries.component').then((m)=>m.FriesComponent), title:'Fries'},
    {path:'profile', loadComponent:()=>import('src/app/Components/profile/profile.component').then((m)=>m.ProfileComponent), title:'Profile'},
    {path:'changePass', loadComponent:()=>import('src/app/Components/change-password/change-password.component').then((m)=>m.ChangePasswordComponent), title:'Change Password'},
    {path:'addAddress', loadComponent:()=>import('src/app/Components/add-address/add-address.component').then((m)=>m.AddAddressComponent), title:'Add Address'},
    {path:'cart', loadComponent:()=>import('src/app/Components/cart/cart.component').then((m)=>m.CartComponent), title:'Cart'}
  ]},

  {path:'**', loadComponent:()=>import('src/app/Components/not-found/not-found.component').then((m)=>m.NotFoundComponent), title:'Not Found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
