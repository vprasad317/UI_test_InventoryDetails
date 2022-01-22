import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { activatedRouteMock, InentoryServiceMock } from 'src/app/mock/inventory-service.mock';
import { InventoryService } from 'src/app/services/inventory.service';
import { ProductFilterComponent } from './product-filter.component';


class RouterMock {
  navigate(): void {
  }
}
describe('ProductFilterComponent', () => {
  let component: ProductFilterComponent;
  let fixture: ComponentFixture<ProductFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFilterComponent ],
      providers: [{provide: InventoryService, useClass: InentoryServiceMock},
        {provide: Router, useClass: RouterMock},
      {provide: ActivatedRoute, useClass: activatedRouteMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
