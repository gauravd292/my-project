import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeProductListComponent } from './be-product-list.component';

describe('BeProductListComponent', () => {
  let component: BeProductListComponent;
  let fixture: ComponentFixture<BeProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
