import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modul3Component } from './modul3.component';

describe('Modul3Component', () => {
  let component: Modul3Component;
  let fixture: ComponentFixture<Modul3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modul3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modul3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
