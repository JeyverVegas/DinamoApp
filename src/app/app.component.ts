import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: Nav;
  rootPage:any = HomePage;

  Paginas =[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.Paginas = [
      {
        'title': 'Diques',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135',
        'clase': InicioPage
      },
      {
        'title': 'Grupo Electrogeno',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA',
        'clase': InicioPage
      },
      {
        'title': 'Tableros',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529',
        'clase': InicioPage
      },
      {
        'title': 'Volver al Inicio',
        'icon': 'home',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439',
        'clase': InicioPage
      },
    ]


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(item){
    this.nav.setRoot(item.clase);
  }

  
}

