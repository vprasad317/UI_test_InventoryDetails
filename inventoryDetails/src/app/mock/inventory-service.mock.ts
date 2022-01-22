import { Observable, of, throwError } from "rxjs";
import { GridDiskFormatterComponent } from "../components/grid-disk-formatter/grid-disk-formatter.component";
import { GridPriceFormatterComponent } from "../components/grid-price-formatter/grid-price-formatter.component";
import { GridRamFormatterComponent } from "../components/grid-ram-formatter/grid-ram-formatter.component";

export const inventoryDataMock = {
    "servers": [
        {
          "model": "Dell R6302x Intel Xeon E5-2650v3",
          "ram": {
            "memory": "128",
            "unit": "GB",
            "type": "DDR4"
          },
          "hdd": {
            "memory": "120",
            "count": "2",
            "unit": "GB",
            "type" : "SSD"
          },
          "location": "SingaporeSIN-11",
          "price": {
            "currency": "USD",
            "currencySymbol": "$",
            "amountCents": "55599"
          }
        },
      ]
}

const inventoryEmptyDataMock = {
    "servers": []
}

const filterMenuOptions = {
  filterOptions: [
    'contains', 'equals', 'startsWith', 'endsWith'
  ], suppressAndOrCondition: true
};

const colDefsMock: any = [
  {
    headerName: 'Model', minWidth: 300,
    field: 'model', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions
  },
  {
    headerName: 'RAM Type', minWidth: 100,
    field: 'ram', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions,
    cellRendererFramework: GridRamFormatterComponent
  },
  {
    headerName: 'Disk Type', minWidth: 100,
    field: 'hdd', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', filterParams: filterMenuOptions,
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
];

export class activatedRouteMock {
  public queryParams = of({});
}

export class InentoryServiceMock {
    isSuccess = true;
    isNoData = false;
    constructor () {}
    getInventoryDetails(params: any): Observable<any> {
        return (this.isSuccess && !this.isNoData) ? of(inventoryDataMock)
        : (this.isSuccess && this.isNoData) ? of (inventoryEmptyDataMock)
        : throwError({ error: 'Error' });
    }
    getColDefs(): any {
        return colDefsMock;
    }
}