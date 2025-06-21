import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlantelComponent } from './editar-plantel.component';

describe('EditarPlantelComponent', () => {
  let component: EditarPlantelComponent;
  let fixture: ComponentFixture<EditarPlantelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPlantelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlantelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
