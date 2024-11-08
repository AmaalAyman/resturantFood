"use strict";(self.webpackChunkresturantFood=self.webpackChunkresturantFood||[]).push([[581],{581:(x,u,l)=>{l.r(u),l.d(u,{ChangePasswordComponent:()=>E});var m=l(177),n=l(4341),r=l(2598),c=l(6516),g=l(3276),f=l(5794);function _(o,i){1&o&&(r.j41(0,"p"),r.EFF(1,"currentPassword is Required"),r.k0s())}function w(o,i){if(1&o&&(r.j41(0,"div",14),r.DNE(1,_,2,0,"p",15),r.k0s()),2&o){const t=r.XpG();let s;r.R7$(1),r.Y8G("ngIf",null==(s=t.passwordForm.get("currentPassword"))?null:s.getError("required"))}}function h(o,i){1&o&&(r.j41(0,"p"),r.EFF(1,"rePassword is Required"),r.k0s())}function P(o,i){if(1&o&&(r.j41(0,"div",14),r.DNE(1,h,2,0,"p",15),r.k0s()),2&o){const t=r.XpG();let s;r.R7$(1),r.Y8G("ngIf",null==(s=t.passwordForm.get("password"))?null:s.getError("required"))}}function b(o,i){1&o&&(r.j41(0,"p"),r.EFF(1,"rePassword is Required"),r.k0s())}function v(o,i){1&o&&(r.j41(0,"p"),r.EFF(1,"rePassword is MissMatch"),r.k0s())}function C(o,i){if(1&o&&(r.j41(0,"div",14),r.DNE(1,b,2,0,"p",15),r.DNE(2,v,2,0,"p",15),r.k0s()),2&o){const t=r.XpG();let s,e;r.R7$(1),r.Y8G("ngIf",null==(s=t.passwordForm.get("rePassword"))?null:s.getError("required")),r.R7$(1),r.Y8G("ngIf",null==(e=t.passwordForm.get("rePassword"))?null:e.getError("misMatch"))}}function F(o,i){if(1&o&&(r.j41(0,"div",16)(1,"h5",17),r.EFF(2),r.k0s()()),2&o){const t=r.XpG();r.R7$(2),r.JRh(t.errormsg)}}let E=(()=>{class o{constructor(t,s,e,a){this._FormBuilder=t,this._AuthService=s,this._Router=e,this._ToastrService=a,this.errormsg="",this.passwordForm=this._FormBuilder.group({currentPassword:["",[n.k0.required]],password:["",[n.k0.required]],rePassword:[""]},{validators:[this.confirmPassword]})}confirmPassword(t){let s=t.get("password"),e=t.get("rePassword");null==e?.value?e?.setErrors({required:!0}):s?.value!=e?.value&&e?.setErrors({misMatch:!0})}handleForm(){1==this.passwordForm.valid&&this._AuthService.changePassword(this.passwordForm.value).subscribe({next:s=>{"success"==s.message&&(this._AuthService.loginData.password=this.passwordForm.value.password,this._ToastrService.success("Your Password Changed Successfully"," ",{timeOut:5e3}),this._Router.navigate(["/profile"]))},error:s=>{this.errormsg=s.error.message}})}static{this.\u0275fac=function(s){return new(s||o)(r.rXU(n.ok),r.rXU(c.u),r.rXU(g.Ix),r.rXU(f.tw))}}static{this.\u0275cmp=r.VBU({type:o,selectors:[["app-change-password"]],standalone:!0,features:[r.aNF],decls:25,vars:6,consts:[[1,"allform"],[1,"wrapper","six"],[1,"flicker"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","currentPassword",1,"form-label"],["formControlName","currentPassword","type","password","id","currentPassword","placeholder","Enter Your Password...",1,"form-control"],["class","alert alert-danger p-2 small w-75 mx-auto",4,"ngIf"],["for","password",1,"form-label"],["formControlName","password","type","password","id","password","placeholder","Enter Your Password...",1,"form-control"],["for","rePassword",1,"form-label"],["formControlName","rePassword","type","password","id","rePassword","placeholder","Enter Your Password...",1,"form-control"],["type","submit",1,"btn","subbtn",3,"disabled"],["class","alert alert-danger p-1 small w-100 mx-auto mt-5",4,"ngIf"],[1,"alert","alert-danger","p-2","small","w-75","mx-auto"],[4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-100","mx-auto","mt-5"],[1,"px-5","py-2"]],template:function(s,e){if(1&s&&(r.j41(0,"section")(1,"div",0)(2,"div",1)(3,"div")(4,"h3",2),r.EFF(5,"Change Your Password:"),r.k0s()()(),r.j41(6,"form",3),r.bIt("ngSubmit",function(){return e.handleForm()}),r.j41(7,"div",4)(8,"label",5),r.EFF(9,"currentPassword:"),r.k0s(),r.nrm(10,"input",6),r.k0s(),r.DNE(11,w,2,1,"div",7),r.j41(12,"div",4)(13,"label",8),r.EFF(14,"newPassword:"),r.k0s(),r.nrm(15,"input",9),r.k0s(),r.DNE(16,P,2,1,"div",7),r.j41(17,"div",4)(18,"label",10),r.EFF(19,"rePassword:"),r.k0s(),r.nrm(20,"input",11),r.k0s(),r.DNE(21,C,3,2,"div",7),r.j41(22,"button",12),r.EFF(23,"Submit "),r.k0s()(),r.DNE(24,F,3,1,"div",13),r.k0s()()),2&s){let a,d,p;r.R7$(6),r.Y8G("formGroup",e.passwordForm),r.R7$(5),r.Y8G("ngIf",(null==(a=e.passwordForm.get("currentPassword"))?null:a.errors)&&((null==(a=e.passwordForm.get("currentPassword"))?null:a.touched)||(null==(a=e.passwordForm.get("currentPassword"))?null:a.value.length)>0)),r.R7$(5),r.Y8G("ngIf",(null==(d=e.passwordForm.get("password"))?null:d.errors)&&((null==(d=e.passwordForm.get("password"))?null:d.touched)||(null==(d=e.passwordForm.get("password"))?null:d.value.length)>0)),r.R7$(5),r.Y8G("ngIf",(null==(p=e.passwordForm.get("rePassword"))?null:p.errors)&&((null==(p=e.passwordForm.get("rePassword"))?null:p.touched)||(null==(p=e.passwordForm.get("rePassword"))?null:p.value.length)>0)),r.R7$(1),r.Y8G("disabled",e.passwordForm.invalid),r.R7$(2),r.Y8G("ngIf",e.errormsg)}},dependencies:[m.MD,m.bT,n.X1,n.qT,n.me,n.BC,n.cb,n.j4,n.JD],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}section[_ngcontent-%COMP%]{background-image:url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg);background-repeat:no-repeat;background-size:cover;height:800px}.imglog[_ngcontent-%COMP%]{margin-left:-12px}.allform[_ngcontent-%COMP%]{margin-top:80px;margin-left:200px;border:2px solid black;border-radius:20px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);width:800px}.form-label[_ngcontent-%COMP%]{font-weight:bolder;color:#163343;margin-left:100px}.form-control[_ngcontent-%COMP%]{margin-bottom:50px;margin-left:100px;width:600px}img[_ngcontent-%COMP%]{height:800px;width:400px}h3[_ngcontent-%COMP%]{margin-bottom:70px;margin-top:20px;margin-left:120px}.subbtn[_ngcontent-%COMP%]{background-color:#163343;color:#fff;padding:10px 20px;margin-left:300px;margin-bottom:20px;width:200px}.subbtn[_ngcontent-%COMP%]:hover{background-color:#97b1be;color:#000;padding:10px 20px}.flicker[_ngcontent-%COMP%]{font-size:3rem;font-family:Merienda,sans-serif;margin-bottom:50px;color:#0a0d35c0;background:-webkit-gradient(linear,left top,right top,from(#e6e6e6),to(#1d1c1c),color-stop(.8,#8f94d561)) no-repeat;background:gradient(linear,left top,right top,from(#222),to(#222),color-stop(.8,#fff)) no-repeat;background-size:110px 100%;-webkit-background-clip:text;background-clip:text;animation:_ngcontent-%COMP%_flick 1.5s infinite}@keyframes _ngcontent-%COMP%_flick{0%{background-position:top left}to{background-position:top right}}"]})}}return o})()}}]);