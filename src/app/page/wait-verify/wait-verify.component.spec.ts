import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitVerifyComponent } from './wait-verify.component';

describe('WaitVerifyComponent', () => {
  let component: WaitVerifyComponent;
  let fixture: ComponentFixture<WaitVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
