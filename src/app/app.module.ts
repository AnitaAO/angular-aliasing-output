import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
