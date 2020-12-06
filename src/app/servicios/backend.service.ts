import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { 
    console.log("Hola");
  }

  getUsuarios(){
    const path = 'http://localhost:3000/usuarios';
    return this.http.get<usuario[]>(path);
  }

}
