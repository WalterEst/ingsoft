import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-editar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, BarnavComponent, FooterComponent],
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent implements OnInit {
  pedido: any = {};
  id = 0;

  constructor(private route: ActivatedRoute, private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.servicio.getPedidos().subscribe(data => {
      const found = data.find((p: any) => p.id_pedido == this.id);
      if (found) {
        this.pedido = found;
      }
    });
  }

  guardar() {
    this.servicio.updatePedido(this.id, this.pedido).subscribe();
  }
}
