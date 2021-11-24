import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcursosComponent } from './panelcursos.component';

describe('PanelcursosComponent', () => {
  let component: PanelcursosComponent;
  let fixture: ComponentFixture<PanelcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
