import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DiskDetailsComponent } from '../disk-details/disk-details.component';

@Component({
  selector: 'app-grid-ram-formatter',
  templateUrl: './grid-ram-formatter.component.html',
  styleUrls: ['./grid-ram-formatter.component.scss']
})
export class GridRamFormatterComponent implements ICellRendererAngularComp {

  params: any;
  memory: string = '';
  constructor() { }

 agInit(params: ICellRendererParams): void {
     if (params && params.data && params.data.ram) {
       this.params = params.data.ram;
       this.memory = `${this.params.memory} ${this.params.unit}`;
     }
 }
 refresh(params: ICellRendererParams): boolean {
     return false;
 }

  

}
