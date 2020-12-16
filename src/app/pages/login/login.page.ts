import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { sesion } from 'src/app/interfaces/sesion';
import { usuario } from 'src/app/interfaces/usuarios';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() bool:true;

  email;
  contra;
  usuarios: Observable<usuario[]>;
  user: usuario;
  nombre;

  constructor(private router: Router, private menuCtrl:MenuController, private backendService: BackendService) { }

  ngOnInit() {    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  verificar(){
    this.backendService.eliminarSesion(1);
    this.usuarios = this.backendService.verificar2(this.email,this.contra);
    this.usuarios.subscribe(usuarios =>{
      console.log(usuarios[0].nombre)
      this.nombre = usuarios[0].nombre;
      if(this.nombre != undefined){
        this.backendService.crearSesion({
          "idsesion":1,
          "idusuario":usuarios[0].idusuario,
          "nombre":usuarios[0].nombre,
          "apellidos":usuarios[0].apellidos,
          "telefono":usuarios[0].telefono,
          "email":usuarios[0].email,
          "contrasena":usuarios[0].contrasena,
          "domicilio":usuarios[0].domicilio,
          "tipo":usuarios[0].tipo
        });
        this.router.navigate(['/venta']);
      }else{
        console.log('Adios perro')
      }
    })
  }

  

}
