import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-grid-price-formatter',
  templateUrl: './grid-price-formatter.component.html',
  styleUrls: ['./grid-price-formatter.component.scss']
})
export class GridPriceFormatterComponent implements ICellRendererAngularComp {

  params: any;
  constructor() { }

  agInit(params: ICellRendererParams): void {
    if (params && params.data) {
      this.params = params.data.price;
    }
  }
  refresh(params: ICellRendererParams): boolean {
      return false;
  }

}
