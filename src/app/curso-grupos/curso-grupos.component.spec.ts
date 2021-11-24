import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGruposComponent } from './curso-grupos.component';

describe('CursoGruposComponent', () => {
  let component: CursoGruposComponent;
  let fixture: ComponentFixture<CursoGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
