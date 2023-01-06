import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahingMachineComponent } from './wahing-machine.component';

describe('WahingMachineComponent', () => {
  let component: WahingMachineComponent;
  let fixture: ComponentFixture<WahingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahingMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WahingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
