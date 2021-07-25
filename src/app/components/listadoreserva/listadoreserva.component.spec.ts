import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoreservaComponent } from './listadoreserva.component';

describe('ListadoreservaComponent', () => {
  let component: ListadoreservaComponent;
  let fixture: ComponentFixture<ListadoreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoreservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
