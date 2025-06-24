import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-listas-venta',
  standalone: true,
  imports: [CommonModule, BarnavComponent, FooterComponent],
  templateUrl: './listas-venta.component.html',
  styleUrl: './listas-venta.component.css'
})
export class ListasVentaComponent implements OnInit {
  ventas: any[] = [];

  constructor(private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.servicio.getVentas().subscribe(d => this.ventas = d);
  }
}
