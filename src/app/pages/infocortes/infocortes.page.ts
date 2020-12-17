import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Corte } from 'src/app/interfaces/corte';
import { BackendService } from 'src/app/servicios/backend.service';

@Component({
  selector: 'app-infocortes',
  templateUrl: './infocortes.page.html',
  styleUrls: ['./infocortes.page.scss'],
})
export class InfocortesPage implements OnInit {

  cortes: Observable<Corte[]>;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    //Obtiene los cortes creados en la base de datos
    this.cortes = this.backendService.getCortes();
  }

}
