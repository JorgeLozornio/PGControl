import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Corte } from 'src/app/interfaces/corte';
import { Sesion } from 'src/app/interfaces/sesion';
import { Ventas } from 'src/app/interfaces/ventas';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  
  corte: Observable<Corte[]>  
  ventas: Observable<Ventas[]>
  total = 0;
  suscription: Subscription;
  sesion: Observable<Sesion[]>
  piezas;

  nombre;
  apellidos;
  telefono;
  email;
  domicilio;
  tipo;
  idusuario;

  constructor(private alertController: AlertController, private backendService: BackendService) { }

  ngOnInit() {
    this.sesion = this.backendService.getSesion();
    this.sesion.subscribe(sesion => {
      console.log(sesion[0]);
      this.idusuario = sesion[0].idusuario;
      this.nombre = sesion[0].nombre;
      this.apellidos = sesion[0].apellidos;
      this.telefono = sesion[0].telefono;
      this.email = sesion[0].email;
      this.domicilio = sesion[0].domicilio;
      this.tipo = sesion[0].tipo;

    })
    console.log('ngOnInit')
    this.suscription = this.backendService.refresh$.subscribe(() => {
      this.sesion = this.backendService.getSesion();
    })
  }

  ionViewWillEnter() {
    console.log('IonView')
  }

  async crearCorte() {
    const alert = await this.alertController.create({
      header: 'Corte de caja',
      subHeader: '¿Quiere realizar el corte de caja',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Continuar',
          handler: () => {
            console.log('Listo para crear corte')
            this.obtenerDatos();
          }
        }
      ]
    });

    await alert.present();
  }

  obtenerDatos(){
    this.total = 0;
    this.ventas = this.backendService.getVentas();
    this.ventas.subscribe(venta => {
      let descripcion = '';
      let date = new Date();
      for(let i = 0; i <= venta.length; i++){
        this.total = this.total + venta[i].montoventa;
      }
      this.backendService.crearCorte({
        "idusuario": this.idusuario,
        "descripcion": descripcion,
        "montoventa":this.total,
        "fecha":"2020-12-15",
        "hora": ""+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      })
    })
  }


}
