import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPedidoComponent } from './listas-pedido.component';

describe('ListasPedidoComponent', () => {
  let component: ListasPedidoComponent;
  let fixture: ComponentFixture<ListasPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
