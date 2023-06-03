import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUsuariosTabelaComponent } from './listagem-usuarios-tabela.component';

describe('ListagemUsuariosTabelaComponent', () => {
  let component: ListagemUsuariosTabelaComponent;
  let fixture: ComponentFixture<ListagemUsuariosTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemUsuariosTabelaComponent]
    });
    fixture = TestBed.createComponent(ListagemUsuariosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
