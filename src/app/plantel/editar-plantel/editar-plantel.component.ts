import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-editar-plantel',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './editar-plantel.component.html',
  styleUrl: './editar-plantel.component.css'
})
export class EditarPlantelComponent {

}
