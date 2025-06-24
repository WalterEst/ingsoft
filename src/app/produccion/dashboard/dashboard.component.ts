import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  producciones: any[] = [];

  constructor(private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.servicio.getProducciones().subscribe(d => this.producciones = d);
  }
}
