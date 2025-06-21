import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listas-pedido',
  standalone: true,
  imports: [BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './listas-pedido.component.html',
  styleUrl: './listas-pedido.component.css'
})
export class ListasPedidoComponent {

}
