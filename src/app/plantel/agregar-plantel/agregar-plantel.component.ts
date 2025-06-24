import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-agregar-plantel',
  standalone: true,
  imports: [CommonModule, FormsModule, BarnavComponent, FooterComponent],
  templateUrl: './agregar-plantel.component.html',
  styleUrl: './agregar-plantel.component.css'
})
export class AgregarPlantelComponent {
  plantel: any = {};

  constructor(private servicio: ServiciosService) {}

  guardar() {
    this.servicio.createPlantel(this.plantel).subscribe();
  }
}
