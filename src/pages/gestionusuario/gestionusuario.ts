import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { ConfigCuentaPage } from '../config-cuenta/config-cuenta';

/**
 * Generated class for the GestionusuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestionusuario',
  templateUrl: 'gestionusuario.html',
})
export class GestionusuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionusuarioPage');
  }

  inicio(){
    this.navCtrl.push(InicioPage);
  }

  notificaciones(){
    this.navCtrl.push(NotificacionesPage);
  }

  configcuenta(){
    this.navCtrl.push(ConfigCuentaPage);
  }

  goback(){
    this.navCtrl.pop();
  }

}
