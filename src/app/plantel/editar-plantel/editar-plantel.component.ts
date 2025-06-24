import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-editar-plantel',
  standalone: true,
  imports: [CommonModule, FormsModule, BarnavComponent, FooterComponent],
  templateUrl: './editar-plantel.component.html',
  styleUrl: './editar-plantel.component.css'
})
export class EditarPlantelComponent implements OnInit {
  plantel: any = {};
  id = 0;

  constructor(private route: ActivatedRoute, private servicio: ServiciosService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.servicio.getPlanteles().subscribe(data => {
      const found = data.find((p: any) => p.id_plantel == this.id);
      if (found) {
        this.plantel = found;
      }
    });
  }

  guardar() {
    this.servicio.updatePlantel(this.id, this.plantel).subscribe();
  }
}
