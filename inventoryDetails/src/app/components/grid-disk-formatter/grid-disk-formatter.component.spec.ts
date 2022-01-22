import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { GridDiskFormatterComponent } from './grid-disk-formatter.component';


const dialogData = {
  data: {
    "memory": "120",
      "count": "2",
      "unit": "GB",
      "type" : "SSD"
  }
}
const dialogMock = {
  open: () => {
    return {
      afterClosed: () => of({})
    };
  },
}

describe('GridDiskFormatterComponent', () => {
  let component: GridDiskFormatterComponent;
  let fixture: ComponentFixture<GridDiskFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDiskFormatterComponent ],
      providers: [{provide: MatDialog, useValue: dialogMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDiskFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
