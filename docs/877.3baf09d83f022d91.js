"use strict";(self.webpackChunkresturantFood=self.webpackChunkresturantFood||[]).push([[877],{6877:(_,l,i)=>{i.r(l),i.d(l,{ProfileComponent:()=>t});var c=i(177),h=i(3276),e=i(2598),m=i(6516),u=i(5794);function g(r,p){if(1&r&&(e.j41(0,"span"),e.EFF(1,"*"),e.k0s()),2&r){const s=p.$implicit,n=e.XpG();e.xc7("visibility",n.pass.length-1>=s?"visibile":"hidden")}}function f(r,p){if(1&r&&(e.j41(0,"h4"),e.EFF(1,"Phone: "),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&r){const s=e.XpG();e.R7$(3),e.JRh(s.address.phone)}}function o(r,p){if(1&r&&(e.j41(0,"h4"),e.EFF(1,"Address: "),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&r){const s=e.XpG();e.R7$(3),e.Lme("",s.address.city," , ",s.address.details,"")}}const a=function(){return[1,2,3,4,5,6,7,8,9,10]};let t=(()=>{class r{constructor(s,n,d){this._AuthService=s,this._ToastrService=n,this._Router=d,this.errormsg="",this.addID="",this.userId="",this.email=this._AuthService.loginData.email,this.pass=this._AuthService.loginData.password}ngOnInit(){this.userData(),this.getAddress(),console.log(this._AuthService.loginData)}userData(){this._AuthService.saveUserData(),this.user=this._AuthService.userData,console.log(this._AuthService.userData)}deleteAddress(){this._AuthService.deleteAddress(this.userId).subscribe({next:s=>{"success"==s.status&&(this.addID="",this.userId="",this._ToastrService.success(s.message," ",{timeOut:5e3}))},error:s=>{this.errormsg=s.error.message}})}getAddress(){this._AuthService.getAddress().subscribe({next:s=>{for(let n=0;s.data[n];n++)s.data[n]._id==s.data[n]._id&&(this.addID=s.data[n]._id,this.userId=s.data[n]._id,this.address=s.data[n])}})}static{this.\u0275fac=function(n){return new(n||r)(e.rXU(m.u),e.rXU(u.tw),e.rXU(h.Ix))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-profile"]],standalone:!0,features:[e.aNF],decls:25,vars:7,consts:[["src","https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png","alt",""],[1,"userinfo"],[1,"pt-4"],[3,"visibility",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"allbtns"],["routerLink","/changePass",1,"btn"],["routerLink","/addAddress",1,"btn"],[1,"btn",3,"click"]],template:function(n,d){1&n&&(e.j41(0,"section"),e.nrm(1,"img",0),e.j41(2,"div",1)(3,"h4",2),e.EFF(4,"Name: "),e.j41(5,"span"),e.EFF(6),e.k0s()(),e.j41(7,"h4"),e.EFF(8,"Email: "),e.j41(9,"span"),e.EFF(10),e.k0s()(),e.j41(11,"h4"),e.EFF(12,"Password: "),e.j41(13,"span"),e.EFF(14),e.DNE(15,g,2,2,"span",3),e.k0s()(),e.DNE(16,f,4,1,"h4",4),e.DNE(17,o,4,2,"h4",4),e.k0s(),e.j41(18,"div",5)(19,"button",6),e.EFF(20,"Change Password"),e.k0s(),e.j41(21,"button",7),e.EFF(22,"Add Address"),e.k0s(),e.j41(23,"button",8),e.bIt("click",function(){return d.deleteAddress()}),e.EFF(24,"Delete Address"),e.k0s()()()),2&n&&(e.R7$(6),e.JRh(d.user.name),e.R7$(4),e.JRh(d.email),e.R7$(4),e.SpI("",d.pass.split("").slice(0,1)," "),e.R7$(1),e.Y8G("ngForOf",e.lJ4(6,a)),e.R7$(1),e.Y8G("ngIf",""!=d.addID),e.R7$(1),e.Y8G("ngIf",""!=d.addID))},dependencies:[c.MD,c.Sq,c.bT,h.Wk],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}section[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1649626284358-71fc246a896a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbmNyZXRlJTIwd2FsbHxlbnwwfHwwfHx8MA%3D%3D);background-repeat:no-repeat;background-size:cover;height:600px}.userinfo[_ngcontent-%COMP%]{width:500px;margin:120px 100px 50px 350px;border-radius:20px;padding:10px 30px;box-shadow:5px 5px 15px 15px #0e2431aa}h4[_ngcontent-%COMP%]{color:#0e2431aa;text-shadow:2px 2px #9aa7afaa;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;padding-bottom:20px}span[_ngcontent-%COMP%]{color:#644a21;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;padding-bottom:20px}img[_ngcontent-%COMP%]{mix-blend-mode:multiply;width:100px;height:100px;margin-top:10px;margin-left:550px;margin-bottom:-120px}.allbtns[_ngcontent-%COMP%]{margin-left:300px}.btn[_ngcontent-%COMP%]{background-color:#0e2431d3;color:#fff;margin-left:50px}.btn[_ngcontent-%COMP%]:hover{background-color:#d2be7fd3;color:#000;margin-left:50px}"]})}}return r})()},6516:(_,l,i)=>{i.d(l,{u:()=>f});class c extends Error{}c.prototype.name="InvalidTokenError";var u=i(2598),g=i(1626);let f=(()=>{class o{constructor(t){this._HttpClient=t,this.myToken={token:localStorage.getItem("eToken")}}saveUserData(){if(null!=localStorage.getItem("eToken")){let r=function m(o,a){if("string"!=typeof o)throw new c("Invalid token specified: must be a string");a||(a={});const t=!0===a.header?0:1,r=o.split(".")[t];if("string"!=typeof r)throw new c(`Invalid token specified: missing part #${t+1}`);let p;try{p=function e(o){let a=o.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function h(o){return decodeURIComponent(atob(o).replace(/(.)/g,(a,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}(a)}catch{return atob(a)}}(r)}catch(s){throw new c(`Invalid token specified: invalid base64 for part #${t+1} (${s.message})`)}try{return JSON.parse(p)}catch(s){throw new c(`Invalid token specified: invalid json for part #${t+1} (${s.message})`)}}(localStorage.getItem("eToken"));this.userData=r}}signup(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",t)}login(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",t)}changePassword(t){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/updateMe/",t,{headers:this.myToken})}addAddress(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/addresses",t,{headers:this.myToken})}deleteAddress(t){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${t}`,{headers:this.myToken})}getAddress(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/addresses",{headers:this.myToken})}forgetPassword(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",t)}resetPassword(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",t)}newPassword(t){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",t)}static{this.\u0275fac=function(r){return new(r||o)(u.KVO(g.Qq))}}static{this.\u0275prov=u.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})()}}]);