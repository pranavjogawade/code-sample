import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEnrollmentComponent } from './start-enrollment.component';

describe('StartEnrollmentComponent', () => {
  let component: StartEnrollmentComponent;
  let fixture: ComponentFixture<StartEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
