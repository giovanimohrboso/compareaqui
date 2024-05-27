import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaFormularioComponent } from './card-lista-formulario.component';

describe('CardListaFormularioComponent', () => {
  let component: CardListaFormularioComponent;
  let fixture: ComponentFixture<CardListaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
