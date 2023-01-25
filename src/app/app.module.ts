import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnoListComponent } from './ono-list/ono-list.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    OnoListComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
