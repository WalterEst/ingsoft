import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
