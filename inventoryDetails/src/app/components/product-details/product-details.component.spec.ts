import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { activatedRouteMock, InentoryServiceMock, inventoryDataMock } from 'src/app/mock/inventory-service.mock';
import { InventoryService } from 'src/app/services/inventory.service';
import { GridDiskFormatterComponent } from '../grid-disk-formatter/grid-disk-formatter.component';
import { GridPriceFormatterComponent } from '../grid-price-formatter/grid-price-formatter.component';
import { GridRamFormatterComponent } from '../grid-ram-formatter/grid-ram-formatter.component';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: activatedRouteMock
        },
        {
          provide: InventoryService,
          useClass: InentoryServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get column definitions', () => {
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
    component.ngOnInit();
    expect(component.columnDefs).toEqual(colDefsMock);

  })

  it('should get Inventory details', () => {
    const mockData: any = inventoryDataMock;
    component.getInventoryDetails();
    expect(component.isLoading).toBeFalsy();
    expect(component.isError).toBeFalsy();
    expect(component.rowData).toEqual(mockData.servers);
  })
});
