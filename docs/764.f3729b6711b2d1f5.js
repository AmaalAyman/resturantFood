"use strict";(self.webpackChunkresturantFood=self.webpackChunkresturantFood||[]).push([[764],{6516:(Fe,K,u)=>{u.d(K,{u:()=>tt});class i extends Error{}i.prototype.name="InvalidTokenError";var k=u(2598),Y=u(1626);let tt=(()=>{class c{constructor(l){this._HttpClient=l,this.myToken={token:localStorage.getItem("eToken")}}saveUserData(){if(null!=localStorage.getItem("eToken")){let f=function Z(c,g){if("string"!=typeof c)throw new i("Invalid token specified: must be a string");g||(g={});const l=!0===g.header?0:1,f=c.split(".")[l];if("string"!=typeof f)throw new i(`Invalid token specified: missing part #${l+1}`);let G;try{G=function Q(c){let g=c.replace(/-/g,"+").replace(/_/g,"/");switch(g.length%4){case 0:break;case 2:g+="==";break;case 3:g+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function U(c){return decodeURIComponent(atob(c).replace(/(.)/g,(g,l)=>{let f=l.charCodeAt(0).toString(16).toUpperCase();return f.length<2&&(f="0"+f),"%"+f}))}(g)}catch{return atob(g)}}(f)}catch(b){throw new i(`Invalid token specified: invalid base64 for part #${l+1} (${b.message})`)}try{return JSON.parse(G)}catch(b){throw new i(`Invalid token specified: invalid json for part #${l+1} (${b.message})`)}}(localStorage.getItem("eToken"));this.userData=f}}signup(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",l)}login(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",l)}changePassword(l){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/updateMe/",l,{headers:this.myToken})}addAddress(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/addresses",l,{headers:this.myToken})}deleteAddress(l){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${l}`,{headers:this.myToken})}getAddress(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/addresses",{headers:this.myToken})}forgetPassword(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",l)}resetPassword(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",l)}newPassword(l){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",l)}static{this.\u0275fac=function(f){return new(f||c)(k.KVO(Y.Qq))}}static{this.\u0275prov=k.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})()},4341:(Fe,K,u)=>{u.d(K,{me:()=>I,ok:()=>An,JD:()=>mt,j4:()=>J,BC:()=>jt,cb:()=>Wt,X1:()=>bn,k0:()=>xe,qT:()=>se});var i=u(2598),U=u(177),Q=u(6648),Z=u(1985),k=u(3073),Y=u(8750),tt=u(9326),c=u(4360),g=u(6450),l=u(8496),G=u(6354);let b=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT))}}static{this.\u0275dir=i.FsC({type:e})}}return e})(),C=(()=>{class e extends b{static{this.\u0275fac=function(){let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}}()}static{this.\u0275dir=i.FsC({type:e,features:[i.Vt3]})}}return e})();const m=new i.nKC("NgValueAccessor"),we={provide:m,useExisting:(0,i.Rfq)(()=>I),multi:!0},Oe=new i.nKC("CompositionEventMode");let I=(()=>{class e extends b{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Se(){const e=(0,U.QT)()?(0,U.QT)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT),i.rXU(Oe,8))}}static{this.\u0275dir=i.FsC({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.bIt("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i.Jv_([we]),i.Vt3]})}}return e})();function _(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function At(e){return null!=e&&"number"==typeof e.length}const d=new i.nKC("NgValidators"),y=new i.nKC("NgAsyncValidators"),Ne=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class xe{static min(n){return function bt(e){return n=>{if(_(n.value)||_(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Dt(e){return n=>{if(_(n.value)||_(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function Mt(e){return _(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Ft(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function Et(e){return _(e.value)||Ne.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function wt(e){return n=>_(n.value)||!At(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function St(e){return n=>At(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Ot(e){if(!e)return T;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(_(r.value))return null;const o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return It(n)}static composeAsync(n){return Tt(n)}}function T(e){return null}function Nt(e){return null!=e}function xt(e){return(0,i.jNT)(e)?(0,Q.H)(e):e}function Ut(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function kt(e,n){return n.map(t=>t(e))}function Gt(e){return e.map(n=>function Ue(e){return!e.validate}(n)?n:t=>n.validate(t))}function It(e){if(!e)return null;const n=e.filter(Nt);return 0==n.length?null:function(t){return Ut(kt(t,n))}}function et(e){return null!=e?It(Gt(e)):null}function Tt(e){if(!e)return null;const n=e.filter(Nt);return 0==n.length?null:function(t){return function f(...e){const n=(0,tt.ms)(e),{args:t,keys:r}=(0,k.D)(e),o=new Z.c(s=>{const{length:a}=t;if(!a)return void s.complete();const p=new Array(a);let A=a,F=a;for(let z=0;z<a;z++){let Ct=!1;(0,Y.Tg)(t[z]).subscribe((0,c._)(s,Dn=>{Ct||(Ct=!0,F--),p[z]=Dn},()=>A--,void 0,()=>{(!A||!Ct)&&(F||s.next(r?(0,l.e)(r,p):p),s.complete())}))}});return n?o.pipe((0,g.I)(n)):o}(kt(t,n).map(xt)).pipe((0,G.T)(Ut))}}function nt(e){return null!=e?Tt(Gt(e)):null}function Bt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Pt(e){return e._rawValidators}function Rt(e){return e._rawAsyncValidators}function rt(e){return e?Array.isArray(e)?e:[e]:[]}function B(e,n){return Array.isArray(e)?e.includes(n):e===n}function Ht(e,n){const t=rt(n);return rt(e).forEach(o=>{B(t,o)||t.push(o)}),t}function Lt(e,n){return rt(n).filter(t=>!B(e,t))}class $t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class h extends $t{get formDirective(){return null}get path(){return null}}class v extends $t{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Xt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let jt=(()=>{class e extends Xt{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(v,2))}}static{this.\u0275dir=i.FsC({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.AVh("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.Vt3]})}}return e})(),Wt=(()=>{class e extends Xt{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(h,10))}}static{this.\u0275dir=i.FsC({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){2&r&&i.AVh("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[i.Vt3]})}}return e})();const E="VALID",R="INVALID",D="PENDING",w="DISABLED";function st(e){return(H(e)?e.validators:e)||null}function at(e,n){return(H(n)?n.asyncValidators:e)||null}function H(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Jt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.wOt(1e3,"");if(!r[t])throw new i.wOt(1001,"")}function zt(e,n,t){e._forEachChild((r,o)=>{if(void 0===t[o])throw new i.wOt(1002,"")})}class L{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===R}get pending(){return this.status==D}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ht(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ht(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Lt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Lt(n,this._rawAsyncValidators))}hasValidator(n){return B(this._rawValidators,n)}hasAsyncValidator(n){return B(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=D,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===D)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;const t=xt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.bkB,this.statusChanges=new i.bkB}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(R)?R:E}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){H(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Te(e){return Array.isArray(e)?et(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Be(e){return Array.isArray(e)?nt(e):e||null}(this._rawAsyncValidators)}}class S extends L{constructor(n,t,r){super(st(t),at(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){zt(this,0,n),Object.keys(n).forEach(r=>{Jt(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const o=this.controls[r];o&&o.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,o)=>{r.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((o,s)=>{r=t(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}class Kt extends S{}const M=new i.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>$}),$="always";function O(e,n,t=$){lt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Re(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Qt(e,n)})}(e,n),function Le(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function He(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Qt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Pe(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function j(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),q(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function W(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function lt(e,n){const t=Pt(e);null!==n.validator?e.setValidators(Bt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=Rt(e);null!==n.asyncValidator?e.setAsyncValidators(Bt(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();W(n._rawValidators,o),W(n._rawAsyncValidators,o)}function q(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=Pt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=Rt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return W(n._rawValidators,r),W(n._rawAsyncValidators,r),t}function Qt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function te(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function ee(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const x=class extends L{constructor(n=null,t,r){super(st(t),at(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=ee(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){te(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){te(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){ee(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};let se=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=i.FsC({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return e})(),le=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=i.$C({type:e})}static{this.\u0275inj=i.G2t({})}}return e})();const ft=new i.nKC("NgModelWithFormControlWarning"),nn={provide:h,useExisting:(0,i.Rfq)(()=>J)};let J=(()=>{class e extends h{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.bkB,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return O(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){j(t.control||null,t,!1),function We(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Yt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(j(r||null,t),(e=>e instanceof x)(o)&&(O(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function Zt(e,n){lt(e,n)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function $e(e,n){return q(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){lt(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(d,10),i.rXU(y,10),i.rXU(M,8))}}static{this.\u0275dir=i.FsC({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&i.bIt("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i.Jv_([nn]),i.Vt3,i.OA$]})}}return e})();const sn={provide:v,useExisting:(0,i.Rfq)(()=>mt)};let mt=(()=>{class e extends v{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.bkB,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function ct(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===I?t=s:function je(e){return Object.getPrototypeOf(e.constructor)===C}(s)?r=s:o=s}),o||r||t||null}(0,s)}ngOnChanges(t){this._added||this._setUpControl(),function dt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function X(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(r){return new(r||e)(i.rXU(h,13),i.rXU(d,10),i.rXU(y,10),i.rXU(m,10),i.rXU(ft,8))}}static{this.\u0275dir=i.FsC({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i.Jv_([sn]),i.Vt3,i.OA$]})}}return e})(),Vn=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=i.$C({type:e})}static{this.\u0275inj=i.G2t({imports:[le]})}}return e})();class De extends L{constructor(n,t,r){super(st(t),at(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,r={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,r={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){zt(this,0,n),n.forEach((r,o)=>{Jt(this,!1,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(n.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((r,o)=>{r.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,r)=>{n(t,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}function Me(e){return!!e&&(void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn)}let An=(()=>{class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,r=null){const o=this._reduceControls(t);let s={};return Me(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new S(o,s)}record(t,r=null){const o=this._reduceControls(t);return new Kt(o,r)}control(t,r,o){let s={};return this.useNonNullable?(Me(r)?s=r:(s.validators=r,s.asyncValidators=o),new x(t,{...s,nonNullable:!0})):new x(t,r,o)}array(t,r,o){const s=t.map(a=>this._createControl(a));return new De(s,r,o)}_reduceControls(t){const r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){return t instanceof x||t instanceof L?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=i.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),bn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ft,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:M,useValue:t.callSetDisabledState??$}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=i.$C({type:e})}static{this.\u0275inj=i.G2t({imports:[Vn]})}}return e})()}}]);