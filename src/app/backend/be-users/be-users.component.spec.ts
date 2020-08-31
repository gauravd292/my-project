import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeUsersComponent } from './be-users.component';

describe('BeUsersComponent', () => {
  let component: BeUsersComponent;
  let fixture: ComponentFixture<BeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
