import { Component } from '@angular/core';
import { BarnavComponent } from "../compartido/barnav/barnav.component";
import { FooterComponent } from "../compartido/footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
