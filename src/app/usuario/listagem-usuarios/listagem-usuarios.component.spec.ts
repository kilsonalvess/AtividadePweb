import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUsuariosComponent } from './listagem-usuarios.component';

describe('ListagemUsuariosComponent', () => {
  let component: ListagemUsuariosComponent;
  let fixture: ComponentFixture<ListagemUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
