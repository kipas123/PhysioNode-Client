import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAilmentComponent } from './user-ailment.component';

describe('UserAilmentComponent', () => {
  let component: UserAilmentComponent;
  let fixture: ComponentFixture<UserAilmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAilmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAilmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
