import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmMoreButtonComponent } from './bm-more-button.component';

describe('BmMoreButtonComponent', () => {
  let component: BmMoreButtonComponent;
  let fixture: ComponentFixture<BmMoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmMoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
