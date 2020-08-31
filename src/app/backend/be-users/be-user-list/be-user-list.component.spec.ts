import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeUserListComponent } from './be-user-list.component';

describe('BeUserListComponent', () => {
  let component: BeUserListComponent;
  let fixture: ComponentFixture<BeUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
