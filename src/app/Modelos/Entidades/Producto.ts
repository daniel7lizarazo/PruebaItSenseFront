import { EnumEstadosProducto } from "../Enums/EnumEstadosProducto";

export interface Producto {
  id: Number;
  nombre: string;
  stock: Number;
  esDefectuoso: boolean;
  estadoProducto: EnumEstadosProducto;
}

export interface FiltroProducto extends Partial<Producto>{

}
