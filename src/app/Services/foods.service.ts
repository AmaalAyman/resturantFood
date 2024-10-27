import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Foodinfo } from '../Interfaces/foodinfo';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

cart:Foodinfo[]=[];

  constructor(private _HttpClient:HttpClient) { }



  getPizza():Observable<any>{
     return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
  }


  getPasta():Observable<any>{
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pasta');
 }

 getSalad():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=salad');
}

getSteak():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=steak');
}

getCheckin():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=chicken');
}

getSeaFood():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=seafood');
}

getFries():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=fries');
}

}
