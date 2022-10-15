import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelos/Entidades/Producto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private PRODUCTOS_URL = `${environment.API_URL}Products`

  addProducto(producto: Producto) {
    return this.http.post<Producto>(`${this.PRODUCTOS_URL}/AddProducto`, producto);
  }

  getAllProductos() : Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.PRODUCTOS_URL}/GetAllProductos`);
  }

  getProductoById(id: Number) : Observable<Producto> {
    return this.http.get<Producto>(`${this.PRODUCTOS_URL}/GetById/${id}`);
  }

  updateProducto(producto: Producto){
    return this.http.put<Producto>(`${this.PRODUCTOS_URL}/UpdateProducto`, producto)
  }

  deleteProducto(id: Number){
    return this.http.delete<Producto>(`${this.PRODUCTOS_URL}/DeleteProducto/${id}`)
  }
}
