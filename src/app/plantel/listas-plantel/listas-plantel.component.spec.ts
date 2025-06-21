import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPlantelComponent } from './listas-plantel.component';

describe('ListasPlantelComponent', () => {
  let component: ListasPlantelComponent;
  let fixture: ComponentFixture<ListasPlantelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasPlantelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasPlantelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
