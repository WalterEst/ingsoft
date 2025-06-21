import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-agregar-plantel',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './agregar-plantel.component.html',
  styleUrl: './agregar-plantel.component.css'
})
export class AgregarPlantelComponent {

}
