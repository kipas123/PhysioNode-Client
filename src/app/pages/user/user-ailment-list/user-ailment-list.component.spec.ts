import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAilmentListComponent } from './user-ailment-list.component';

describe('UserAilmentListComponent', () => {
  let component: UserAilmentListComponent;
  let fixture: ComponentFixture<UserAilmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAilmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAilmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
