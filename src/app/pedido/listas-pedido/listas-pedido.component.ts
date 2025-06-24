import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-listas-pedido',
  standalone: true,
  imports: [CommonModule, BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './listas-pedido.component.html',
  styleUrl: './listas-pedido.component.css'
})
export class ListasPedidoComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.servicio.getPedidos().subscribe(d => this.pedidos = d);
  }
}
