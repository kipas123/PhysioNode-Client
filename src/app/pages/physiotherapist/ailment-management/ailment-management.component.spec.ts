import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AilmentManagementComponent } from './ailment-management.component';

describe('AilmentManagementComponent', () => {
  let component: AilmentManagementComponent;
  let fixture: ComponentFixture<AilmentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AilmentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AilmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
