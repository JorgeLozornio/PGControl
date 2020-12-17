import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interfaces/ventas';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/servicios/backend.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-infoventas',
  templateUrl: './infoventas.page.html',
  styleUrls: ['./infoventas.page.scss'],
})
export class InfoventasPage implements OnInit {

  ventas: Observable<Ventas[]>;
  pdfObject

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.ventas = this.backendService.getVentas();
  }

  pdf(){
    let docDefinition = {
      content: [
        'Hola pérros'
      ]
    };

    this.pdfObject = pdfMake.createPdf(docDefinition)
    this.pdfObject.download()
  }

}
