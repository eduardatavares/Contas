import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpModule }from '@angular/http';
import { AppComponent } from './app.component';
import { ContasService } from './services/contas.service';



@NgModule({
  declarations: [
    AppComponent
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
