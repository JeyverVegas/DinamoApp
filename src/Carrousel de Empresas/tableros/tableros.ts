import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GestionusuarioPage } from '../gestionusuario/gestionusuario';
import { Empresa } from '../../interfaces/Empresa';
import { EMPRESAS } from '../../mock/empresas';

@IonicPage()
@Component({
  selector: 'page-tableros',
  templateUrl: 'tableros.html',
})
export class TablerosPage {

  gestionUsuaio: any = GestionusuarioPage;
  empresas: Empresa[] = [];
  
  ionViewDidEnter() {
    this.empresas = EMPRESAS;
  }

}
