import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interfaces/ventas';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-infoventas',
  templateUrl: './infoventas.page.html',
  styleUrls: ['./infoventas.page.scss'],
})
export class InfoventasPage implements OnInit {

  ventas: Observable<Ventas[]>;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.ventas = this.backendService.getVentas();
  }

}
