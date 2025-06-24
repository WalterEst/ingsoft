import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-agregar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, BarnavComponent, FooterComponent],
  templateUrl: './agregar-pedido.component.html',
  styleUrl: './agregar-pedido.component.css'
})
export class AgregarPedidoComponent {
  pedido: any = {};

  constructor(private servicio: ServiciosService) {}

  guardar() {
    this.servicio.createPedido(this.pedido).subscribe();
  }
}
