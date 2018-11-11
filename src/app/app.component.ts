
import { Component, OnInit } from "@angular/core";
import{User} from "./app.comc";
import {UserService } from "./app.serivce";
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
private data:UserService;
name:string="";
email:string="";
phone:string="";
subject:string="";
message:string="";
item=new User(this.name,this.email,this.phone,this.subject,this.message);
onSubmit(data:User)
{
  this.data.addUser(this.item);
  this.data.addUser(this.item).subscribe(
    (data:any)=>{
      console.log(data);
      console.log("Yess");
      this.ngOnInit();
      alert("Now You Can login");
    });
  }
}
