import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './app.comc';
import { map } from 'rxjs/operators';



@Injectable()
export class UserService {

  public url: string = "https://wishmytrip.herokuapp.com/users/";

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  addUser(item:User) {
    

 
      let body = JSON.stringify(item);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
   
     let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       
      //let options = new RequestOptions({ headers: headers });
       
       return this._http.post(this.url,body, httpOptions)
       
      .pipe(map((response:Response)=>response.json()));
       
      }
    }