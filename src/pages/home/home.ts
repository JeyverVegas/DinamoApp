import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { SelectuserPage } from '../selectuser/selectuser';
import { IntroduccionPage } from '../introduccion/introduccion';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController ) {
    this.menuCtrl.swipeEnable(false, 'Menus');

  }
  selectuser(){
    this.navCtrl.push(SelectuserPage);
  }
  
  introduccion(){
    this.navCtrl.push(IntroduccionPage);
  }
}


