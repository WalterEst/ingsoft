import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-listas-venta',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './listas-venta.component.html',
  styleUrl: './listas-venta.component.css'
})
export class ListasVentaComponent {

}
