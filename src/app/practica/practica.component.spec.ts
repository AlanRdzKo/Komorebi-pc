import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaComponent } from './practica.component';

describe('PracticaComponent', () => {
  let component: PracticaComponent;
  let fixture: ComponentFixture<PracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
