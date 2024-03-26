import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMenuComponent } from './departments-menu.component';

describe('DepartmentsMenuComponent', () => {
  let component: DepartmentsMenuComponent;
  let fixture: ComponentFixture<DepartmentsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
