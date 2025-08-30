import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessComponent } from './coursess.component';

describe('CoursessComponent', () => {
  let component: CoursessComponent;
  let fixture: ComponentFixture<CoursessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
