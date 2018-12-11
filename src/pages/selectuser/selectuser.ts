import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { Registro2Page } from '../registro2/registro2';
/**
 * Generated class for the SelectuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectuser',
  templateUrl: 'selectuser.html',
})
export class SelectuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectuserPage');
  }
  registro(){
    this.navCtrl.push(RegistroPage);
  }

  registro2(){
    this.navCtrl.push(Registro2Page);
  }

}
