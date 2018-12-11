import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CambiarContraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contra',
  templateUrl: 'cambiar-contra.html',
})
export class CambiarContraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertaborrar: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContraPage');
  }

  alerta(){
    let milaerta = this.alertaborrar.create({
      title:'¡Se han Realizado lo Cambios!',
      message: 'Se ha realizado el cambio de contraseña',
      buttons: [
        {
        text: 'Entendido'
      },
    ],
          
    });
    milaerta.present();
  }

}
