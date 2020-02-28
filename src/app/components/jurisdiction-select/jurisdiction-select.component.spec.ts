import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisdictionSelectComponent } from './jurisdiction-select.component';

describe('JurisdictionSelectComponent', () => {
  let component: JurisdictionSelectComponent;
  let fixture: ComponentFixture<JurisdictionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurisdictionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurisdictionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
