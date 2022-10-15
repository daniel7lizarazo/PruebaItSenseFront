import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Modelos/Entidades/Producto';
import { ProductosService } from '../Servicios/productos.service';
import { StoreService } from '../Servicios/store.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  constructor(private servicioProducto: ProductosService,
    private storeServicio: StoreService) { }

  $Productos! : Observable<Producto[]>;

  ngOnInit(): void {
    this.getProductos();
    this.storeServicio.productosModificados$
    .subscribe(productosModificados => {
      if(productosModificados) this.getProductos();
    })
  }

  getProductos(){
    this.$Productos = this.servicioProducto.getAllProductos();
  }
}
