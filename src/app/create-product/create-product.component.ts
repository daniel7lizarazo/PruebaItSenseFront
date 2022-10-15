import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelos/Entidades/Producto';
import { EnumEstadosProducto } from '../Modelos/Enums/EnumEstadosProducto';
import { ListaEstadosProducto } from '../Modelos/Listas/ListaEstadosProducto';
import { ProductosService } from '../Servicios/productos.service';
import { StoreService } from '../Servicios/store.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  producto: Producto = {
    id: 0,
    nombre: "",
    stock: 0,
    esDefectuoso: false,
    estadoProducto: EnumEstadosProducto.EnBodega

  };

  constructor(private productoServicio: ProductosService,
    private storeServicio: StoreService) { }

  ngOnInit(): void {
  }

  listaEstadosProducto = ListaEstadosProducto;

  onSubmit() {
    this.productoServicio.addProducto(this.producto)
    .subscribe(_ => {
      this.storeServicio.modificarProductos(true);
    });
  }

}
