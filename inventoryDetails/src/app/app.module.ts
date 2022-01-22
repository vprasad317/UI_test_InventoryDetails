import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module.module';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GridPriceFormatterComponent } from './components/grid-price-formatter/grid-price-formatter.component';
import { GridDiskFormatterComponent } from './components/grid-disk-formatter/grid-disk-formatter.component';
import { DiskDetailsComponent } from './components/disk-details/disk-details.component';
import { GridRamFormatterComponent } from './components/grid-ram-formatter/grid-ram-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    GridPriceFormatterComponent,
    GridDiskFormatterComponent,
    DiskDetailsComponent,
    GridRamFormatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([
      GridPriceFormatterComponent,
      GridDiskFormatterComponent,
      GridRamFormatterComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

