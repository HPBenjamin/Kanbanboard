import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUrgencyComponent } from './edit-urgency.component';

describe('EditUrgencyComponent', () => {
  let component: EditUrgencyComponent;
  let fixture: ComponentFixture<EditUrgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUrgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUrgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
