import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeleteEmployeeComponent } from './check-delete-employee.component';

describe('CheckDeleteEmployeeComponent', () => {
  let component: CheckDeleteEmployeeComponent;
  let fixture: ComponentFixture<CheckDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckDeleteEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
