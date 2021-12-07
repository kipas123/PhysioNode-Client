import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCreatorComponent } from './visit-creator.component';

describe('VisitCreatorComponent', () => {
  let component: VisitCreatorComponent;
  let fixture: ComponentFixture<VisitCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
