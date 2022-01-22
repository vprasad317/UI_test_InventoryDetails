import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPriceFormatterComponent } from './grid-price-formatter.component';

describe('GridPriceFormatterComponent', () => {
  let component: GridPriceFormatterComponent;
  let fixture: ComponentFixture<GridPriceFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPriceFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPriceFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
