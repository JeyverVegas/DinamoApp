import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CambiarEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-email',
  templateUrl: 'cambiar-email.html',
})
export class CambiarEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertaborrar: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarEmailPage');
  }

  alerta(){
    let milaerta = this.alertaborrar.create({
      title:'Te hemos enviado un Correo Electronico',
      message: 'Por favor ingresa en tu correo y Verifica la Direccion',
      buttons: [
        {
        text: 'Entendido'
      },
    ],
          
    });
    milaerta.present();
  }

}
