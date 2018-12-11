import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ActualizarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualizar-perfil',
  templateUrl: 'actualizar-perfil.html',
})
export class ActualizarPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertaborrar: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualizarPerfilPage');
  }

  alerta(){
    let milaerta = this.alertaborrar.create({
      title:'¡ENHORABUENA!',
      message: 'Se han guardado todos los cambios',
      buttons: [
        {
        text: 'Entendido'
      },
    ],
          
    });
    milaerta.present();
  }

}
