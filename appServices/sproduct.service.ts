import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SproductService {
  url:string='https://authangular-ab518-default-rtdb.firebaseio.com/products.json';

  constructor(private http:HttpClient) { }

  saveProduct(products:any[]){
    return this.http.post('https://authangular-ab518-default-rtdb.firebaseio.com/products.json',products);
  }
  fetchProduct(){
    return this.http.get(this.url);
  }
  
}
