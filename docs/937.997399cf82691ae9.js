"use strict";(self.webpackChunkresturantFood=self.webpackChunkresturantFood||[]).push([[937],{937:(h,a,i)=>{i.r(a),i.d(a,{SeafoodComponent:()=>_});var r=i(177),t=i(2598),d=i(7159),l=i(5794);function p(n,c){if(1&n&&t.nrm(0,"i",11),2&n){const o=c.$implicit,e=t.XpG().$implicit;t.xc7("color",e.social_rank/10/2>=o?"yellow":"none")}}const g=function(){return[1,2,3,4,5]};function m(n,c){if(1&n){const o=t.RV6();t.j41(0,"div",2)(1,"div",3),t.nrm(2,"img",4),t.j41(3,"div",5)(4,"div",6)(5,"h5",7),t.EFF(6),t.k0s(),t.j41(7,"p",8),t.DNE(8,p,1,2,"i",9),t.k0s(),t.j41(9,"h6"),t.EFF(10),t.nI1(11,"currency"),t.k0s(),t.j41(12,"button",10),t.bIt("click",function(){const f=t.eBV(o).$implicit,u=t.XpG();return t.Njj(u.addCart(f))}),t.EFF(13,"Add To Cart"),t.k0s()()()()()}if(2&n){const o=c.$implicit;t.R7$(2),t.Y8G("src",o.image_url,t.B4B)("alt",o.title),t.R7$(4),t.JRh(o.title.split(" ").slice(0,3).join(" ")),t.R7$(2),t.Y8G("ngForOf",t.lJ4(8,g)),t.R7$(2),t.SpI(" ",t.i5U(11,5,(o.social_rank/.7).toString().slice(5,8)," ")," EGP")}}let _=(()=>{class n{constructor(o,e){this._FoodsService=o,this._ToastrService=e,this.seafood=[]}ngOnInit(){this._FoodsService.getSeaFood().subscribe({next:o=>{this.seafood=o.recipes}})}addCart(o){this._FoodsService.cart.push(o),this._ToastrService.success("Item Added To Your Cart"),console.log(this._FoodsService.cart)}static{this.\u0275fac=function(e){return new(e||n)(t.rXU(d.z),t.rXU(l.tw))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-seafood"]],standalone:!0,features:[t.aNF],decls:3,vars:1,consts:[[1,"row","row-cols-4","g-5"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","h-100"],[1,"card-img-top","rounded-circle","position-absolute",3,"src","alt"],[1,"card-body"],[1,"allcard"],[1,"card-title"],[1,"card-text"],["class","fa-solid fa-star",3,"color",4,"ngFor","ngForOf"],[1,"btn","addbtn",3,"click"],[1,"fa-solid","fa-star"]],template:function(e,s){1&e&&(t.j41(0,"section")(1,"div",0),t.DNE(2,m,14,9,"div",1),t.k0s()()),2&e&&(t.R7$(2),t.Y8G("ngForOf",s.seafood))},dependencies:[r.MD,r.Sq,r.oe],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}.card[_ngcontent-%COMP%]{height:500px;max-width:400px;background-color:inherit;border:initial;margin-left:10px;margin-top:10px}.card-img-top[_ngcontent-%COMP%]{margin-right:30px;margin-left:20px;margin-top:20px;width:200px;height:200px}.card-body[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;margin-right:30px;margin-top:120px}.card-title[_ngcontent-%COMP%]{font-size:large;font-weight:bolder;font-family:Georgia,Times New Roman,Times,serif;color:#596e79}h6[_ngcontent-%COMP%]{color:#c7b198;margin-top:15px;margin-left:6px}.card-text[_ngcontent-%COMP%]{margin-left:6px}.addbtn[_ngcontent-%COMP%]{background-color:#2b4450;color:#fff;margin-top:15px;width:200px}.allcard[_ngcontent-%COMP%]{margin-top:100px}section[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px}"]})}}return n})()}}]);