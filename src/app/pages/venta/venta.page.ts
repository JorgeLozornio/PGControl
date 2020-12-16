import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController} from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Pieza } from 'src/app/interfaces/pieza';
import { Producto } from 'src/app/interfaces/producto';
import { Sesion } from 'src/app/interfaces/sesion';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {

  productos: Observable<Producto[]>;
  listaP: Array<Pieza>=[]
  suscription: Subscription;
  total:number = 0;
  sesion: Observable<Sesion[]>
  piezas;

  nombre;
  apellidos;
  telefono;
  email;
  domicilio;
  tipo;
  idusuario;
  descripcion = '';
  

  constructor(private actionSheetController: ActionSheetController, private menuCtrl: MenuController, private backendService: BackendService, public alertController: AlertController) { }  

  ngOnInit() {
    this.productos = this.backendService.getProductos();
    this.productos.subscribe(p => {
      this.piezas = p;
      console.log(p)
    })

    this.suscription = this.backendService.refresh$.subscribe(() => {
      this.productos = this.backendService.getProductos();
    })
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
    this.menuCtrl.enable(true);
  }

  agregar(nombre, precio){
    this.total = 0;
    this.descripcion = ''
    this.listaP.push({"nombre":nombre,"precio": precio})
    console.log(this.listaP[0].nombre);
    console.log(this.listaP);
    for(let i = 0; i < this.listaP.length; i++){
      this.total += this.listaP[i].precio;
      this.descripcion = this.descripcion + this.listaP[i].nombre+':   $'+this.listaP[i].precio+'\n'
    }
    console.log(this.total)
    console.log(this.descripcion)
  }

  async menuP() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Productos',
      cssClass: 'my-custom-class',
      buttons: [{
        text: this.piezas[4].nombre,
        handler: () => {
          this.peso(this.piezas[4].nombre, this.piezas[4].precio, 'Introduzca la cantitad en unidades')
        }
      }, {
        text: this.piezas[0].nombre,
        handler: () => {
          this.peso('KG '+this.piezas[0].nombre, this.piezas[0].precio, 'Introduzca la cantitad en Kg')
        }
      }, {
        text: this.piezas[1].nombre,
        handler: () => {
          this.peso('KG '+this.piezas[1].nombre, this.piezas[1].precio, 'Introduzca la cantitad en Kg')
        }
      }, {
        text: this.piezas[2].nombre,
        handler: () => {
          this.peso('KG '+this.piezas[2].nombre, this.piezas[2].precio, 'Introduzca la cantitad en Kg')
        }
      }, {
        text: this.piezas[3].nombre,
        handler: () => {
          this.peso('KG '+this.piezas[3].nombre, this.piezas[3].precio, 'Introduzca la cantitad en Kg')
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async peso(pnombre, precio, mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: pnombre,
      subHeader: mensaje,
      inputs: [
        {
          name: 'kg',
          type: 'number',
          min: 0.1
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            this.agregar(data.kg+' '+pnombre, (Number(data.kg)*precio)),
            console.log('Confirm Ok ',(Number(data.kg)*precio));
          }
        }
      ]
    });

    await alert.present();
  }

  async cancelar() {
    const alert = await this.alertController.create({
      header: 'Eliminar venta',
      subHeader: '¿Estas seguro de eliminar la venta?',
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
            this.listaP = [];
            this.total = 0;
          }
        }
      ]
    });

    await alert.present();
  }

  async venta() {
    const alert = await this.alertController.create({
      header: 'Realizar venta',
      subHeader: 'Monto a pagar: '+this.total,
      inputs: [
        {
          name: 'monto',
          type: 'number',
          placeholder: 'Pago del cliente',
          min: 0.1
        },
      ],
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
          handler: (data) => {
            if(this.total <= data.monto){
              this.cambio(data.monto-this.total);
            }else{
              this.rechazo();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async cambio(t) {
    const alert = await this.alertController.create({
      header: 'Cambio: $'+t,
      subHeader: 'Monto a pagar: '+t,
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.crearVenta();
          }
        }
      ]
    });

    await alert.present();
  }

  async rechazo() {
    const alert = await this.alertController.create({
      header: 'El monto pago es menor al total',
      buttons: [
        {
          text: 'Continuar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  crearVenta(){
    let date = new Date();

    this.backendService.crearVenta({
      "idusuario": this.idusuario,
      "descripcion": this.descripcion,
      "montoventa": this.total,
      "fecha": "2020-12-15",
      "hora": ""+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    })
  }

}
