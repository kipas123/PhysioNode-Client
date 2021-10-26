import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetChangeComponent } from './pasword-reset-change.component';

describe('PaswordResetChangeComponent', () => {
  let component: PasswordResetChangeComponent;
  let fixture: ComponentFixture<PasswordResetChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
