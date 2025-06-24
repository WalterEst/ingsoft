import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // PLANTELES
  getPlanteles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/planteles`);
  }

  createPlantel(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/planteles`, data);
  }

  // PRODUCCIONES
  getProducciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/producciones`);
  }

  createProduccion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/producciones`, data);
  }

  updateProduccion(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/producciones/${id}`, data);
  }

  // PEDIDOS
  getPedidos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pedidos`);
  }

  createPedido(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos`, data);
  }

  updatePedido(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/pedidos/${id}`, data);
  }

  // VENTAS
  getVentas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ventas`);
  }

  createVenta(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ventas`, data);
  }
} 
