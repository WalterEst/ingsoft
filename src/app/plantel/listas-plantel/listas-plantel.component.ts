import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-listas-plantel',
  standalone: true,
  imports: [CommonModule, BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './listas-plantel.component.html',
  styleUrl: './listas-plantel.component.css'
})
export class ListasPlantelComponent implements OnInit {
  planteles: any[] = [];

  constructor(private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.servicio.getPlanteles().subscribe(d => this.planteles = d);
  }
}
