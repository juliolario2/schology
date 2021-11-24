import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisrecursosComponent } from './misrecursos.component';

describe('MisrecursosComponent', () => {
  let component: MisrecursosComponent;
  let fixture: ComponentFixture<MisrecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisrecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
