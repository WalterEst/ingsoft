import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";

@Component({
  selector: 'app-editar-pedido',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent {

}
