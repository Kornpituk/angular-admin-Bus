import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysitComponent } from './analysit.component';

describe('AnalysitComponent', () => {
  let component: AnalysitComponent;
  let fixture: ComponentFixture<AnalysitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
