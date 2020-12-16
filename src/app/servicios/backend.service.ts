import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../interfaces/usuarios';
import { Corte } from '../interfaces/corte';
import { Sesion, sesion } from '../interfaces/sesion';
import { Ventas } from '../interfaces/ventas';
import { contentTracing } from 'electron';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { 
    console.log("Hola");
  }

  get refresh$(){
    return this._refresh$;
  }

  //USUARIOS
  getUsuarios(){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios';
    return this.http.get<usuario[]>(path);
  }  

  //CREAR USUARIOS
  crearUsuario(usuario) {
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios';
    return this.http.post(path,usuario).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });

  }

  //VERIFICAR USUARIO 
  verificar(email,contra){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios/verificar/'+email;
    return this.http.put(path,contra).toPromise().then(data => {
      console.log(data);
      return data;
    });
  }

  verificar2(email,contra){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios/verificar/'+email+'/'+contra;
    return this.http.get<usuario[]>(path);
  }

  //ACTUALIZAR INFORMACION DE USUARIO
  updateUsuario(usuario, id){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios/'+id;
    return this.http.put(path, usuario).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });
  } 

  //ELIMINAR USUARIO
  eliminarUsuario(id: number){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios/'+id;
    return this.http.delete(path).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });
  }

  //Ventas
  getVentas(){
    const path = 'https://backend-pgcontrol.herokuapp.com/ventas';
    return this.http.get<Ventas[]>(path);
  }

  //CREAR VENTA
  crearVenta(venta) {
    const path = 'https://backend-pgcontrol.herokuapp.com/ventas';
    return this.http.post(path,venta).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });

  }

  //OBTENER CORTES
  getCortes(){
    const path = 'https://backend-pgcontrol.herokuapp.com/usuarios';
    return this.http.get<Corte[]>(path);
  } 

  //CREAR CORTE
  crearCorte(corte) {
    const path = 'https://backend-pgcontrol.herokuapp.com/ventas';
    return this.http.post(path,corte).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });

  }

  //ELIMINAR SESION
  eliminarSesion(id){
    const path = 'https://backend-pgcontrol.herokuapp.com/sesion/'+id;
    return this.http.delete(path).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    })
    .catch(data => {
      console.log(data);
      return data;
    });
  }

  //CREAR SESION
  crearSesion(sesion) {
    const path = 'https://backend-pgcontrol.herokuapp.com/sesion';
    return this.http.post(path,sesion).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).toPromise().then(data => {
      console.log(data);
      return data;
    });
  }

  //CONSULTAR SESION
  getSesion(){
    const path = 'https://backend-pgcontrol.herokuapp.com/sesion';
    return this.http.get<Sesion[]>(path);
  }  

  //PRODUCTOS
  //CONSULTAR PRODUCTOS
  getProductos(){
    const path = 'https://backend-pgcontrol.herokuapp.com/piezas';
    return this.http.get<Producto[]>(path);
  }  
  

}