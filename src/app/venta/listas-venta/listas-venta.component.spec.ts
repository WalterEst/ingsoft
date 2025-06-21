import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasVentaComponent } from './listas-venta.component';

describe('ListasVentaComponent', () => {
  let component: ListasVentaComponent;
  let fixture: ComponentFixture<ListasVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasVentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
