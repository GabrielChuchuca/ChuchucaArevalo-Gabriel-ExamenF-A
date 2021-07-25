import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroreservaComponent } from './registroreserva.component';

describe('RegistroreservaComponent', () => {
  let component: RegistroreservaComponent;
  let fixture: ComponentFixture<RegistroreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroreservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
