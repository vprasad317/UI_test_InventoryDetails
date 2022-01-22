import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DiskDetailsComponent } from '../disk-details/disk-details.component';

@Component({
  selector: 'app-grid-disk-formatter',
  templateUrl: './grid-disk-formatter.component.html',
  styleUrls: ['./grid-disk-formatter.component.scss']
})
export class GridDiskFormatterComponent implements ICellRendererAngularComp {

  params: any;
  constructor(public dialog: MatDialog) { }

 agInit(params: ICellRendererParams): void {
     if (params && params.data && params.data.hdd) {
       this.params = params.data.hdd;
     }
 }
 refresh(params: ICellRendererParams): boolean {
     return false;
 }

 openDialog(): void {
  this.dialog.open(DiskDetailsComponent, {
    data: this.params
  });
 }
}
