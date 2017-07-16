import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./authService/auth.service";
import {HttpModule} from "@angular/http";
import {RessourceService} from "./ressourceService/ressource.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService,RessourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
