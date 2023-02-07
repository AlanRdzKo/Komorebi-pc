import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgToolsComponent } from './prog-tools.component';

describe('ProgToolsComponent', () => {
  let component: ProgToolsComponent;
  let fixture: ComponentFixture<ProgToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
