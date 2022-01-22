import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DiskDetailsComponent } from './disk-details.component';

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

describe('DiskDetailsComponent', () => {
  let component: DiskDetailsComponent;
  let fixture: ComponentFixture<DiskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskDetailsComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue: dialogData
      },
    {
      provide: MatDialogRef, useValue: dialogMock
    }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
