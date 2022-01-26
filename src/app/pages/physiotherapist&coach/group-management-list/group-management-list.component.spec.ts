import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupManagementListComponent } from './group-management-list.component';

describe('GroupManagementListComponent', () => {
  let component: GroupManagementListComponent;
  let fixture: ComponentFixture<GroupManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
