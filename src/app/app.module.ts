import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './cart/cart.component';
import { FinishComponent } from './finish/finish.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'finish', component: FinishComponent },
  { path: '', component : ShoppingComponent },
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CartComponent,
    FinishComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
