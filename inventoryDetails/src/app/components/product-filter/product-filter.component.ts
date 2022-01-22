import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DDListInterface } from 'src/app/interface/product-data.interface';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  ramFilterCtrl = new FormControl();
  hddFilterCtrl = new FormControl();
  ramDataList:DDListInterface [] = [];
  hddDataList:DDListInterface [] = []

  constructor(public service: InventoryService, public route: Router, public activatedRoute: ActivatedRoute) { 
    this.ramFilterCtrl.valueChanges.subscribe(data => {
      if (data) {
        let ramFilterVal = data.map((ele: any) => {
          return ele.id;
        })

        this.setRoute(ramFilterVal.toString(), 'ramType');
      }
    });

    this.hddFilterCtrl.valueChanges.subscribe(data => {
      if (data) {
        this.setRoute(data.value, 'hddType');
      }
    })
  }

  ngOnInit(): void {
    this.ramDataList = this.service.ramDataList;
    this.hddDataList = this.service.hddDataList;
  }

  setRoute(value: any, type: string): void {
    this.route.navigate(['inventory'], {queryParams: {[type]: value}, queryParamsHandling: 'merge'});
  }

  clearFilters(): void {
    this.ramFilterCtrl.reset();
    this.hddFilterCtrl.reset();
    this.route.navigate(['inventory'], {queryParams: {ramType: null, hddType: null}, queryParamsHandling: 'merge'});
  }
}
