import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./authService/auth.service";
import {RessourceService} from "./ressourceService/ressource.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public accessToken:string ;
  public tickets;

  public constructor(private $authService:AuthService, private $ressourceService:RessourceService){

  }

  private connect(form:NgForm){
    this.$authService.authenticate(form.value.username,form.value.password).subscribe(
      res => {
        this.accessToken= res.access_token;
        this.showTickets(this.accessToken);
      }
      ,
      err => {return "Erreur bande de noob: "+err;}
    );
  }

  private showTickets(access_token:string){
    console.log("token:"+access_token);
    this.$ressourceService.getTickets(access_token).subscribe(
      res => {
        console.log(res)
        this.tickets = res;
      }
    );
  }

}
