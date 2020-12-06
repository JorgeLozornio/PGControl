import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from 'src/app/interfaces/usuarios';
import { BackendService } from 'src/app/servicios/backend.service';


@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.page.html',
  styleUrls: ['./adminusuarios.page.scss'],
})
export class AdminusuariosPage implements OnInit {

  usuarios: Observable<usuario[]>;
  
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.usuarios = this.backendService.getUsuarios();
  }

}
