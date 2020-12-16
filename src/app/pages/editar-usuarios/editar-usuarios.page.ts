import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.page.html',
  styleUrls: ['./editar-usuarios.page.scss'],
})
export class EditarUsuariosPage implements OnInit {

  @Input() id;
  @Input() nombre;
  @Input() apellidos;
  @Input() telefono;
  @Input() email;
  @Input() contrasena;
  @Input() domicilio;
  @Input() tipo;


  constructor(private backendService: BackendService ,private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  editarUsuario(){
    this.backendService.updateUsuario({
      "nombre":this.nombre,
      "apellidos":this.apellidos,
      "telefono":this.telefono,
      "email":this.email,
      "contrasena":this.contrasena,
      "domicilio":this.domicilio,
      "tipo":this.tipo
    },this.id);
    console.log(this.nombre,this.apellidos,this.tipo);
    this.modalCtrl.dismiss();
  }

}
