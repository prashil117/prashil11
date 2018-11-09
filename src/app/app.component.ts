import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "prashil";
  facofee=faCoffee;
}
