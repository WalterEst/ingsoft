import { Component } from '@angular/core';
import { BarnavComponent } from "../../compartido/barnav/barnav.component";
import { FooterComponent } from "../../compartido/footer/footer.component";
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-listas-plantel',
  standalone: true,
  imports: [BarnavComponent, FooterComponent, RouterLink],
  templateUrl: './listas-plantel.component.html',
  styleUrl: './listas-plantel.component.css'
})
export class ListasPlantelComponent {

}
