import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from '../Modelos/Entidades/Producto';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private productosModificados = new Subject<boolean>();

  productosModificados$ = this.productosModificados.asObservable();

  modificarProductos(esProductoAgregado: boolean){
    this.productosModificados.next(esProductoAgregado);
  }

  constructor() { }
}
