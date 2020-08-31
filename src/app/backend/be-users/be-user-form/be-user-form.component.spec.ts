import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeUserFormComponent } from './be-user-form.component';

describe('BeUserFormComponent', () => {
  let component: BeUserFormComponent;
  let fixture: ComponentFixture<BeUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
