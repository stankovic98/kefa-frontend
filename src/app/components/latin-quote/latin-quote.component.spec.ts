import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatinQuoteComponent } from './latin-quote.component';

describe('LatinQuoteComponent', () => {
  let component: LatinQuoteComponent;
  let fixture: ComponentFixture<LatinQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatinQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatinQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
