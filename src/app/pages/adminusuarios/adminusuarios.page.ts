import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { usuario } from 'src/app/interfaces/usuarios';
import { BackendService } from 'src/app/servicios/backend.service';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ModalController } from '@ionic/angular';
import { CrearUsuariosPage } from '../crear-usuarios/crear-usuarios.page';
import { EditarUsuariosPage } from '../editar-usuarios/editar-usuarios.page';


@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.page.html',
  styleUrls: ['./adminusuarios.page.scss'],
})
export class AdminusuariosPage implements OnInit {

  usuarios: Observable<usuario[]>;
  id;
  nombre;
  apellidos;
  telefono;
  email;
  contrasena;
  domicilio;
  tipo;

  suscription: Subscription;
  
  constructor(private modalCtrl: ModalController, private backendService: BackendService, public alertController: AlertController) { }

  ngOnInit() {
    //Petición al servidor para obtener los usuarios registrados
    this.usuarios = this.backendService.getUsuarios();
    this.usuarios.subscribe(usuarios => {
      this.apellidos = usuarios[0].apellidos;
    })

    //Petición utilizada pára refrescar la visualizacion de los usuarios
    this.suscription = this.backendService.refresh$.subscribe(() => {
      this.usuarios = this.backendService.getUsuarios();
    })
  }

  //GUARDAR DATOS DE USUARIOS LOCALMENTE
  async guardar(u){
    this.id = u.idusuario;
    this.nombre = u.nombre;
    this.apellidos = u.apellidos;
    this.telefono = u.telefono;
    this.email = u.email;
    this.contrasena = u.contrasena;
    this.domicilio = u.domicilio;
    this.tipo = u.tipo;

    console.log(u);

    this.editarUsuarios();

  }
  
  //MODAL PARA MODIFICAR USUARIOS
  async editarUsuarios(){
    const modal = await this.modalCtrl.create({
      component: EditarUsuariosPage,
      cssClass: 'my-custom-class',
      componentProps: {
        "id": this.id,
        "nombre":this.nombre,
        "apellidos":this.apellidos,
        "telefono":this.telefono,
        "email":this.email,
        "contrasena":this.contrasena,
        "domicilio":this.domicilio,
        "tipo":this.tipo
      }
    });

    await modal.present();

  }


  //MODAL PARA CREAR USUSARIOS
  async crearUsuarios(){
    const modal = await this.modalCtrl.create({
      component: CrearUsuariosPage,
      cssClass: 'my-custom-class',
      componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
      }
    });

    await modal.present();

  }

  //ELIMINAR USUARIO
  eliminarUsuario(id){
    this.backendService.eliminarUsuario(id);
  }

  //Alerta para asegurar la eliminación de un usuario
  async eliminarAlerta(u) {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario',
      subHeader: '¿Estas seguro de eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log(u);
            this.eliminarUsuario(u);
          }
        }
      ]
    });

    await alert.present();
  }

}
