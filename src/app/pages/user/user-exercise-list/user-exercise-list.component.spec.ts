import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExerciseListComponent } from './user-exercise-list.component';

describe('UserExerciseListComponent', () => {
  let component: UserExerciseListComponent;
  let fixture: ComponentFixture<UserExerciseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExerciseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
