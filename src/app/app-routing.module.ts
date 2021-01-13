import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './Components/error/error.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ItemsComponent } from './Components/items/items.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
