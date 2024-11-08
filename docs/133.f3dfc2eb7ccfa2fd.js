"use strict";(self.webpackChunkresturantFood=self.webpackChunkresturantFood||[]).push([[133],{1133:(M,a,l)=>{l.r(a),l.d(a,{ForgetPasswordComponent:()=>T});var m=l(177),i=l(4341),e=l(2598),c=l(6516),_=l(3276),d=l(5794);function u(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"Email is Required"),e.k0s())}function g(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"Email Invalid"),e.k0s())}function p(r,s){if(1&r&&(e.j41(0,"div",11),e.DNE(1,u,2,0,"p",12),e.DNE(2,g,2,0,"p",12),e.k0s()),2&r){const t=e.XpG(2);let o,n;e.R7$(1),e.Y8G("ngIf",null==(o=t.emailForm.get("email"))?null:o.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(n=t.emailForm.get("email"))?null:n.getError("email"))}}function f(r,s){1&r&&e.nrm(0,"i",13)}function F(r,s){if(1&r&&(e.j41(0,"div",11)(1,"h5"),e.EFF(2),e.k0s()()),2&r){const t=e.XpG(2);e.R7$(2),e.JRh(t.errormsg)}}function h(r,s){if(1&r){const t=e.RV6();e.j41(0,"section",1)(1,"div",2)(2,"div")(3,"h3",3),e.EFF(4,"Write Your Email:"),e.k0s()(),e.j41(5,"form",4),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.handleForgetForm())}),e.j41(6,"div",5)(7,"label",6),e.EFF(8,"Email:"),e.k0s(),e.nrm(9,"input",7),e.k0s(),e.DNE(10,p,3,2,"div",8),e.nrm(11,"br")(12,"br")(13,"br"),e.j41(14,"button",9),e.EFF(15,"Submit "),e.DNE(16,f,1,0,"i",10),e.k0s()(),e.DNE(17,F,3,1,"div",8),e.k0s()()}if(2&r){const t=e.XpG();let o;e.R7$(5),e.Y8G("formGroup",t.emailForm),e.R7$(5),e.Y8G("ngIf",(null==(o=t.emailForm.get("email"))?null:o.errors)&&((null==(o=t.emailForm.get("email"))?null:o.touched)||(null==(o=t.emailForm.get("email"))?null:o.value.length)>0)),e.R7$(4),e.Y8G("disabled",t.emailForm.invalid),e.R7$(2),e.Y8G("ngIf",t.isLoading),e.R7$(1),e.Y8G("ngIf",t.errormsg)}}function w(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"resetCode is Required"),e.k0s())}function b(r,s){if(1&r&&(e.j41(0,"div",11),e.DNE(1,w,2,0,"p",12),e.k0s()),2&r){const t=e.XpG(2);let o;e.R7$(1),e.Y8G("ngIf",null==(o=t.resetForm.get("resetCode"))?null:o.getError("required"))}}function E(r,s){1&r&&e.nrm(0,"i",13)}function P(r,s){if(1&r&&(e.j41(0,"div",11)(1,"h5"),e.EFF(2),e.k0s()()),2&r){const t=e.XpG(2);e.R7$(2),e.JRh(t.errormsg)}}function v(r,s){if(1&r){const t=e.RV6();e.j41(0,"section",1)(1,"div",2)(2,"div")(3,"h3",3),e.EFF(4,"Verify Reset Code:"),e.k0s()(),e.j41(5,"form",4),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.handleResetForm())}),e.j41(6,"div",5)(7,"label",14),e.EFF(8,"ResetCode:"),e.k0s(),e.nrm(9,"input",15),e.k0s(),e.DNE(10,b,2,1,"div",8),e.j41(11,"button",9),e.EFF(12,"Submit "),e.DNE(13,E,1,0,"i",10),e.k0s()(),e.DNE(14,P,3,1,"div",8),e.k0s()()}if(2&r){const t=e.XpG();let o;e.R7$(5),e.Y8G("formGroup",t.resetForm),e.R7$(5),e.Y8G("ngIf",(null==(o=t.resetForm.get("resetCode"))?null:o.errors)&&((null==(o=t.resetForm.get("resetCode"))?null:o.touched)||(null==(o=t.resetForm.get("resetCode"))?null:o.value.length)>0)),e.R7$(1),e.Y8G("disabled",t.resetForm.invalid),e.R7$(2),e.Y8G("ngIf",t.isLoading),e.R7$(1),e.Y8G("ngIf",t.errormsg)}}function x(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"email is Required"),e.k0s())}function C(r,s){if(1&r&&(e.j41(0,"div",11),e.DNE(1,x,2,0,"p",12),e.k0s()),2&r){const t=e.XpG(2);let o;e.R7$(1),e.Y8G("ngIf",null==(o=t.newForm.get("email"))?null:o.getError("required"))}}function k(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"newPassword is Required"),e.k0s())}function R(r,s){1&r&&(e.j41(0,"p"),e.EFF(1,"newPassword must start with upperCase then from 6 to 10"),e.k0s())}function G(r,s){if(1&r&&(e.j41(0,"div",11),e.DNE(1,k,2,0,"p",12),e.DNE(2,R,2,0,"p",12),e.k0s()),2&r){const t=e.XpG(2);let o,n;e.R7$(1),e.Y8G("ngIf",null==(o=t.newForm.get("newPassword"))?null:o.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(n=t.newForm.get("newPassword"))?null:n.getError("pattern"))}}function j(r,s){1&r&&e.nrm(0,"i",13)}function D(r,s){if(1&r&&(e.j41(0,"div",11)(1,"h5"),e.EFF(2),e.k0s()()),2&r){const t=e.XpG(2);e.R7$(2),e.JRh(t.errormsg)}}function I(r,s){if(1&r){const t=e.RV6();e.j41(0,"section",1)(1,"div",2)(2,"div")(3,"h3",3),e.EFF(4,"Reset Your Password:"),e.k0s()(),e.j41(5,"form",4),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.handleNewForm())}),e.j41(6,"div",5)(7,"label",6),e.EFF(8,"Email:"),e.k0s(),e.nrm(9,"input",16),e.k0s(),e.DNE(10,C,2,1,"div",8),e.j41(11,"div",5)(12,"label",17),e.EFF(13,"newPassword:"),e.k0s(),e.nrm(14,"input",18),e.k0s(),e.DNE(15,G,3,2,"div",8),e.j41(16,"button",9),e.EFF(17,"Submit "),e.DNE(18,j,1,0,"i",10),e.k0s()(),e.DNE(19,D,3,1,"div",8),e.k0s()()}if(2&r){const t=e.XpG();let o,n;e.R7$(5),e.Y8G("formGroup",t.newForm),e.R7$(5),e.Y8G("ngIf",(null==(o=t.newForm.get("email"))?null:o.errors)&&((null==(o=t.newForm.get("email"))?null:o.touched)||(null==(o=t.newForm.get("email"))?null:o.value.length)>0)),e.R7$(5),e.Y8G("ngIf",(null==(n=t.newForm.get("newPassword"))?null:n.errors)&&((null==(n=t.newForm.get("newPassword"))?null:n.touched)||(null==(n=t.newForm.get("newPassword"))?null:n.value.length)>0)),e.R7$(1),e.Y8G("disabled",t.newForm.invalid),e.R7$(2),e.Y8G("ngIf",t.isLoading),e.R7$(1),e.Y8G("ngIf",t.errormsg)}}let T=(()=>{class r{constructor(t,o,n,Y){this._FormBuilder=t,this._AuthService=o,this._Router=n,this._ToastrService=Y,this.errormsg="",this.isLoading=!1,this.forget=!0,this.reset=!1,this.new=!1,this.emailForm=this._FormBuilder.group({email:["",[i.k0.email,i.k0.required]]}),this.resetForm=this._FormBuilder.group({resetCode:["",[i.k0.required]]}),this.newForm=this._FormBuilder.group({email:["",[i.k0.email,i.k0.required]],newPassword:["",[i.k0.required,i.k0.pattern(/^\w{6,10}$/)]]})}handleForgetForm(){const t=this.emailForm.value;this.isLoading=!0,1==this.emailForm.valid&&this._AuthService.forgetPassword(t).subscribe({next:o=>{"success"==o.statusMsg&&(this.isLoading=!1,this.forget=!1,this.reset=!0,this.new=!1,console.log(o))},error:o=>{this.isLoading=!1,this.errormsg=o.error.message}})}handleResetForm(){const t=this.resetForm.value;this.isLoading=!0,this._AuthService.resetPassword(t).subscribe({next:o=>{"Success"==o.status&&(this.isLoading=!1,this.forget=!1,this.reset=!1,this.new=!0),console.log(o)},error:o=>{this.errormsg=o.error.message}})}handleNewForm(){const t=this.newForm.value;this.isLoading=!0,1==this.newForm.valid&&this._AuthService.newPassword(t).subscribe({next:o=>{this._ToastrService.success("Reset Your Password Successfully"),this._Router.navigate(["/login"]),console.log(o)},error:o=>{this.isLoading=!1,this.errormsg=o.error.message}})}static{this.\u0275fac=function(o){return new(o||r)(e.rXU(i.ok),e.rXU(c.u),e.rXU(_.Ix),e.rXU(d.tw))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-forget-password"]],standalone:!0,features:[e.aNF],decls:3,vars:3,consts:[["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"allform"],[1,"flicker"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","email",1,"form-label"],["formControlName","email","type","email","id","email","placeholder","Enter Your Email...",1,"form-control"],["class","alert alert-danger p-1 small w-100 mx-auto",4,"ngIf"],["type","submit",1,"btn","subbtn",3,"disabled"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-100","mx-auto"],[4,"ngIf"],[1,"fa","fa-spin","fa-spinner"],["for","resetCode",1,"form-label"],["formControlName","resetCode","type","text","id","resetCode","placeholder","Enter ResetCode...",1,"form-control"],["formControlName","email","type","email","id","email","placeholder","Enter Your email...",1,"form-control"],["for","newPassword",1,"form-label"],["formControlName","newPassword","type","password","id","newPassword","placeholder","Enter Your newPassword...",1,"form-control"]],template:function(o,n){1&o&&(e.DNE(0,h,18,5,"section",0),e.DNE(1,v,15,5,"section",0),e.DNE(2,I,20,6,"section",0)),2&o&&(e.Y8G("ngIf",1==n.forget),e.R7$(1),e.Y8G("ngIf",1==n.reset),e.R7$(1),e.Y8G("ngIf",1==n.new))},dependencies:[m.MD,m.bT,i.X1,i.qT,i.me,i.BC,i.cb,i.j4,i.JD],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}.container-fluid[_ngcontent-%COMP%]{background-image:url(https://cdn.apartmenttherapy.info/image/upload/v1579789156/k/Photo/Recipes/2020-01-superbowl-grazing-table/2020_superbowl_grazingtable_shot1_288.jpg);background-repeat:no-repeat;background-size:cover;min-height:600px}.imglog[_ngcontent-%COMP%]{margin-left:-12px}.allform[_ngcontent-%COMP%]{margin:50px 100px;background-color:#e9e3e38f;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}form[_ngcontent-%COMP%]{padding-left:20px}.form-label[_ngcontent-%COMP%]{font-weight:bolder;color:#163343}.form-control[_ngcontent-%COMP%]{margin-bottom:50px;max-width:1000px}img[_ngcontent-%COMP%]{height:800px;width:400px}h1[_ngcontent-%COMP%]{margin-bottom:70px}.subbtn[_ngcontent-%COMP%]{background-color:#163343;color:#fff;padding:10px 20px;margin-left:300px;width:400px;margin-bottom:20px}.subbtn[_ngcontent-%COMP%]:hover{background-color:#97b1be;color:#000;padding:10px 20px}.forgetbtn[_ngcontent-%COMP%]{color:#156088;text-decoration:none;margin-left:20px;font-weight:700;font-style:italic}.flicker[_ngcontent-%COMP%]{font-size:3rem;font-family:Merienda,sans-serif;margin-bottom:50px;margin-top:20px;padding:15px;color:#13174b61;background:-webkit-gradient(linear,left top,right top,from(#e6e6e6),to(#1d1c1c),color-stop(.8,#8f94d561)) no-repeat;background:gradient(linear,left top,right top,from(#222),to(#222),color-stop(.8,#fff)) no-repeat;background-size:110px 100%;-webkit-background-clip:text;background-clip:text;animation:_ngcontent-%COMP%_flick 1.5s infinite}@keyframes _ngcontent-%COMP%_flick{0%{background-position:top left}to{background-position:top right}}"]})}}return r})()}}]);