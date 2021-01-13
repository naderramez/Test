import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './Components/items/items.component';
import { SingleItemComponent } from './Components/single-item/single-item.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { ApiService } from './Services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SingleItemComponent,
    ItemDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
