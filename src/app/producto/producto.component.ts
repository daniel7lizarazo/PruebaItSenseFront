import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../Modelos/Entidades/Producto';
import { ListaEstadosProducto } from '../Modelos/Listas/ListaEstadosProducto';
import { ProductosService } from '../Servicios/productos.service';
import { StoreService } from '../Servicios/store.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private servicioProducto: ProductosService,
    private storeServicio: StoreService) { }

  @Input()
  producto! : Producto;

  listaEstadosProducto = ListaEstadosProducto;

  ngOnInit(): void {
  }

  ActualizarProducto(){
    this.servicioProducto.updateProducto(this.producto)
    .subscribe( updateResponse => {
      this.servicioProducto.getProductoById(this.producto.id)
      .subscribe(productResponse => {
        this.producto = productResponse;
      })
    });
  }

  EliminarProducto(){
    this.servicioProducto.deleteProducto(this.producto.id)
    .subscribe(_=> {
      this.storeServicio.modificarProductos(true);
    })
  }
}
