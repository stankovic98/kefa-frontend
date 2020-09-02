import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DioceseComponent } from './diocese.component';

describe('DioceseComponent', () => {
  let component: DioceseComponent;
  let fixture: ComponentFixture<DioceseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DioceseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DioceseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
