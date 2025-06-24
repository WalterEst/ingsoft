import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-registrar-produccion',
  standalone: true,
  imports: [CommonModule, FormsModule, BarnavComponent, FooterComponent],
  templateUrl: './registrar-produccion.component.html',
  styleUrl: './registrar-produccion.component.css'
})
export class RegistrarProduccionComponent {
  produccion: any = {};

  constructor(private servicio: ServiciosService) {}

  guardar() {
    this.servicio.createProduccion(this.produccion).subscribe();
  }
}
