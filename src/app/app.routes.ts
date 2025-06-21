import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './produccion/dashboard/dashboard.component';
import { EditarPlantelComponent } from './plantel/editar-plantel/editar-plantel.component';
import { RegistrarProduccionComponent } from './produccion/registrar-produccion/registrar-produccion.component';
import { ListasPedidoComponent } from './pedido/listas-pedido/listas-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';
import { ListasVentaComponent } from './venta/listas-venta/listas-venta.component';
import { ListasPlantelComponent } from './plantel/listas-plantel/listas-plantel.component';
import { AgregarPedidoComponent } from './pedido/agregar-pedido/agregar-pedido.component';
import { AgregarPlantelComponent } from './plantel/agregar-plantel/agregar-plantel.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: InicioComponent },
    { path: 'produccion/dashboard', component: DashboardComponent },
    { path: 'produccion/registrar-produccion', component: RegistrarProduccionComponent },
    { path: 'plantel/editar-plantel', component: EditarPlantelComponent },
    { path: 'plantel/listas-plantel', component: ListasPlantelComponent },
    { path: 'plantel/agregar-plantel', component: AgregarPlantelComponent },
    { path: 'pedido/listas-pedido', component: ListasPedidoComponent }, 
    { path: 'pedido/editar-pedido', component: EditarPedidoComponent },
    { path: 'pedido/agregar-pedido', component: AgregarPedidoComponent},
    { path: 'venta/listas-venta', component: ListasVentaComponent },

];
