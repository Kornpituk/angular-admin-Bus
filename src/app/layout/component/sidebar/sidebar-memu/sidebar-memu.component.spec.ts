import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMemuComponent } from './sidebar-memu.component';

describe('SidebarMemuComponent', () => {
  let component: SidebarMemuComponent;
  let fixture: ComponentFixture<SidebarMemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMemuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
