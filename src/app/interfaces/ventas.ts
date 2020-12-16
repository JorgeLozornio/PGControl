import { StringifyOptions } from "querystring";

export interface Ventas{
    idventa: string;
    idusuario: string;
    nombre: string;
    apellidos: string;
    descripcion: string;
    montoventa: number;
    fecha: string;
    hora: string;
}