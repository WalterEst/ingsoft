import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlantelComponent } from './agregar-plantel.component';

describe('AgregarPlantelComponent', () => {
  let component: AgregarPlantelComponent;
  let fixture: ComponentFixture<AgregarPlantelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPlantelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPlantelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
