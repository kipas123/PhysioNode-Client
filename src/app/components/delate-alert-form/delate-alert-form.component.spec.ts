import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateAlertFormComponent } from './delate-alert-form.component';

describe('DelateAlertFormComponent', () => {
  let component: DelateAlertFormComponent;
  let fixture: ComponentFixture<DelateAlertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateAlertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateAlertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
