import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisdictionLevelComponent } from './jurisdiction-level.component';

describe('JurisdictionLevelComponent', () => {
  let component: JurisdictionLevelComponent;
  let fixture: ComponentFixture<JurisdictionLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurisdictionLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurisdictionLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
