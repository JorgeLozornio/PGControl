import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { contentTracing } from 'electron';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.page.html',
  styleUrls: ['./crear-usuarios.page.scss'],
})
export class CrearUsuariosPage implements OnInit {

  constructor(private modalCtrl: ModalController, private backendService: BackendService) { }

  nombre;
  apellidos;
  telefono;
  email;
  contrasena;
  domicilio;
  tipo;

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  //Modal de la pagina de admiinistrar usuarios, utilizado para enviar datos al servidor
  //y crear un nuevo usuario
  crearUsuario(){
    this.backendService.crearUsuario({
      "nombre":this.nombre,
      "apellidos":this.apellidos,
      "telefono":this.telefono,
      "email":this.email,
      "contrasena":this.contrasena,
      "domicilio":this.domicilio,
      "tipo":this.tipo
    })
    console.log(this.nombre,this.apellidos,this.tipo);
    this.modalCtrl.dismiss();
  }

}
