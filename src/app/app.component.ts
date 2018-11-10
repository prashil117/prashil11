
import { Component, OnInit } from "@angular/core";
import{User} from "./app.comc";

import { from } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
title = "Prashil Parmar";
  ngOnInit() {
  }

 user_email:string="";
 user_name:string="";
 user_phone:string="";
 user_subject:string="";
 user_message:string="";

 oonSubmit(item)
 {
    this.user_email="";

 }
}
