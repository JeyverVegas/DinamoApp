import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GestionusuarioPage } from '../gestionusuario/gestionusuario';
import { PerfilEmpresaPage } from '../Perfil-Empresa/Perfil-Empresa';


@IonicPage()
@Component({
  selector: 'page-map-results',
  templateUrl: 'map-results.html',
})
export class MapResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  gestionUsuario: any = GestionusuarioPage;
  zoom: number = 0;

  onZoomChange(): void {
    console.log(this.zoom);
  }

  onIncrementZoom(): void {
    if (this.zoom < 10) {
      this.zoom++;
    }
  }

  onDecrementZoom(): void {
    if (this.zoom > 0) {
      this.zoom--;
    }
  }

  perfilempresa(){
    this.navCtrl.push(PerfilEmpresaPage);
  }

}
