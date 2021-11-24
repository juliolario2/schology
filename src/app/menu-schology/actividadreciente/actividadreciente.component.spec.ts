import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadrecienteComponent } from './actividadreciente.component';

describe('ActividadrecienteComponent', () => {
  let component: ActividadrecienteComponent;
  let fixture: ComponentFixture<ActividadrecienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadrecienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadrecienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
