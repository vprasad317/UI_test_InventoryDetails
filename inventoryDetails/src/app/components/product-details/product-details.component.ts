import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public service: InventoryService) { }

  isLoading = false;
  isError = false;
  noData = false;
  columnDefs = [];
  rowData = [];
  params: any = {};

  pageSizeformCtrl = new FormControl();

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(qParams => {
      this.params = {};
      if(qParams && Object.keys(qParams).length) {
        this.params = qParams;
      }
      this.getInventoryDetails();
    })
    this.columnDefs = this.service.getColDefs();
    this.getInventoryDetails();
  }
  getInventoryDetails(): void {
    this.isLoading = true;
    this.service.getInventoryDetails(this.params).subscribe(data => {
      this.isLoading = false;
      if (data && Object.keys(data).length && data.hasOwnProperty('servers')) {
        this.noData = false;
        this.isError = false;
        this.rowData = data.servers;
      } else {
        this.noData = true;
        this.isError = false;
      }
    }, err => {
        this.noData = false;
        this.isError = true;
    })
  }
}
