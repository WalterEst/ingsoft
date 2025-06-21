import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-registrar-produccion',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './registrar-produccion.component.html',
  styleUrl: './registrar-produccion.component.css'
})
export class RegistrarProduccionComponent {

}
