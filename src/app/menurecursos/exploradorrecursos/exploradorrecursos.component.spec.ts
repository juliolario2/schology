import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploradorrecursosComponent } from './exploradorrecursos.component';

describe('ExploradorrecursosComponent', () => {
  let component: ExploradorrecursosComponent;
  let fixture: ComponentFixture<ExploradorrecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploradorrecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploradorrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
