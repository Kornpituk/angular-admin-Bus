import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleContentComponent } from './console-content.component';

describe('ConsoleContentComponent', () => {
  let component: ConsoleContentComponent;
  let fixture: ComponentFixture<ConsoleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
