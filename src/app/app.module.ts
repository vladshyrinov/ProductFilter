import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { productsInterceptor } from './fakeAPI/products.interceptor';
import { ProductService } from './services/product.service';

import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { ProductCardComponent } from './components/product-card-list/product-card/product-card.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    ProductCardComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    DataService,
    productsInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
