import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './app.comc';

@Injectable()
export class UserService {

  public url: string = "https://wishmytrip.herokuapp.com/users/";

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  addUser(item:User) {
    
      //  let body = JSON.stringify(item);
        return this._http.post(this.url,item);
      }
    }