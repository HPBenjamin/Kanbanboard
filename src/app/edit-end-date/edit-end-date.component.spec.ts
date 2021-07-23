import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEndDateComponent } from './edit-end-date.component';

describe('EditEndDateComponent', () => {
  let component: EditEndDateComponent;
  let fixture: ComponentFixture<EditEndDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEndDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
