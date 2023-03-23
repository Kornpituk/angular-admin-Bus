import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualCardComponent } from './dual-card.component';

describe('DualCardComponent', () => {
  let component: DualCardComponent;
  let fixture: ComponentFixture<DualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
