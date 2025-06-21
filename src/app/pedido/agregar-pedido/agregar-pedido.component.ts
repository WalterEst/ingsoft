import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-agregar-pedido',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './agregar-pedido.component.html',
  styleUrl: './agregar-pedido.component.css'
})
export class AgregarPedidoComponent {

}
