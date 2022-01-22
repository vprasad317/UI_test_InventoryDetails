import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getInventoryUrl } from 'src/urlBundle';
import { GridDiskFormatterComponent } from '../components/grid-disk-formatter/grid-disk-formatter.component';
import { GridPriceFormatterComponent } from '../components/grid-price-formatter/grid-price-formatter.component';
import { GridRamFormatterComponent } from '../components/grid-ram-formatter/grid-ram-formatter.component';
import { ParamsInterface } from '../interface/product-data.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public ramDataList = [
    {
      id: 2,
      value: '2GB'
    },
    {
      id: 4,
      value: '4GB'
    },
    {
      id: 8,
      value: '8GB'
    },
    {
      id: 12,
      value: '12GB'
    },
    {
      id: 16,
      value: '16GB'
    },
    {
      id: 24,
      value: '24GB'
    },{
      id: 32,
      value: '32GB'
    },
    {
      id: 48,
      value: '48GB'
    },
    {
      id: 64,
      value: '64GB'
    },
    {
      id: 96,
      value: '96GB'
    }
  ];
  hddDataList = [{id:1, value:'SAS'}, {id:2, value: 'SATA'}, {id:3, value: 'SSD'}]
  constructor(public api: ApiService) { }

  getInventoryDetails(params: ParamsInterface): Observable<any> {
    let url = getInventoryUrl;
    if (params && Object.keys(params).length && params.hasOwnProperty('ramType')) {
      url+= `ram=${params.ramType}&`;
    }
    if (params && Object.keys(params).length && params.hasOwnProperty('hddType')) {
      url+= `hdd=${params.hddType}&`;
    }
    return this.api.get(url);
  }

  getColDefs(): any {
    const filterMenuOptions = {
      filterOptions: [
        'contains', 'equals', 'startsWith', 'endsWith'
      ], suppressAndOrCondition: true
    };
    return [
      {
        headerName: 'Model', minWidth: 300,
        field: 'model', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions
      },
      {
        headerName: 'RAM Type', minWidth: 100,
        field: 'ram.memory', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions,
        cellRendererFramework: GridRamFormatterComponent
      },
      {
        headerName: 'Disk Type', minWidth: 100,
        field: 'hdd.memory', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions,
        cellRendererFramework: GridDiskFormatterComponent
      },
      {
        headerName: 'Location', minWidth: 100,
        field: 'location', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions
      },
      {
        headerName: 'Price', minWidth: 100,
        field: 'price', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions,
        cellRendererFramework: GridPriceFormatterComponent
      },
    ]
  }
}
