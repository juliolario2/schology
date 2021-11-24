import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultarmostrarComponent } from './ocultarmostrar.component';

describe('OcultarmostrarComponent', () => {
  let component: OcultarmostrarComponent;
  let fixture: ComponentFixture<OcultarmostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcultarmostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcultarmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
