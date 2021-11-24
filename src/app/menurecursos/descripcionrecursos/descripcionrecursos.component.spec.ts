import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionrecursosComponent } from './descripcionrecursos.component';

describe('DescripcionrecursosComponent', () => {
  let component: DescripcionrecursosComponent;
  let fixture: ComponentFixture<DescripcionrecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionrecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
