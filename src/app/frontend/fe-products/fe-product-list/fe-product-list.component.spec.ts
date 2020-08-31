import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeProductListComponent } from './fe-product-list.component';

describe('FeProductListComponent', () => {
  let component: FeProductListComponent;
  let fixture: ComponentFixture<FeProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
