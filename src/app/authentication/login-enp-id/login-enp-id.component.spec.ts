import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnpIdComponent } from './login-enp-id.component';

describe('LoginEnpIdComponent', () => {
  let component: LoginEnpIdComponent;
  let fixture: ComponentFixture<LoginEnpIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEnpIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEnpIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
