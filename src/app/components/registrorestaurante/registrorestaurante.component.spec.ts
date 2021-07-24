import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrorestauranteComponent } from './registrorestaurante.component';

describe('RegistrorestauranteComponent', () => {
  let component: RegistrorestauranteComponent;
  let fixture: ComponentFixture<RegistrorestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrorestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrorestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
