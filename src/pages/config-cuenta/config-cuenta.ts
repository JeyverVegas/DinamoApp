import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActualizarPerfilPage } from '../Actualizar-Perfil/Actualizar-Perfil';
import { CambiarEmailPage } from '../Cambiar-Email/Cambiar-Email';
import { CambiarContraPage } from '../Cambiar-Contra/Cambiar-Contra';

/**
 * Generated class for the ConfigCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-cuenta',
  templateUrl: 'config-cuenta.html',
})
export class ConfigCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertaborrar: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigCuentaPage');
  }

  alerta(){
    let milaerta = this.alertaborrar.create({
      title:'¿Seguro(a)?',
      message: '¿De verdad quieres borrar tu cuenta? ¡Esta Accion es irreversible!',
      buttons: [
        {
        text: 'Si'
      },
    
        {
        text: 'No'
      }
    ],
          
    });
    milaerta.present();
  }

  ActualizarPerfil(){
    this.navCtrl.push(ActualizarPerfilPage);
  }

  CambiarEmail(){
    this.navCtrl.push(CambiarEmailPage);
  }

  CambiarContra(){
    this.navCtrl.push(CambiarContraPage);
  }
  

}
