import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }
  messageAlert(){
    alert("User Added");
}

// product=[
// {name:"Mobile", id:"001"},
// {name:"TV", id:"002"},
// {name:"Fridge", id:"003"}
// ]

product():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

//name=new Subject<any>();
name=new BehaviorSubject("Default Value");

}