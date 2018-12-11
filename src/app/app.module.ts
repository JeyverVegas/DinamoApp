import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { SelectuserPage } from '../pages/selectuser/selectuser';
import { Registro2Page } from '../pages/registro2/registro2';
import { IntroduccionPage } from '../pages/introduccion/introduccion';
import { InicioPage } from '../pages/inicio/inicio';
import { GestionusuarioPage } from '../pages/gestionusuario/gestionusuario';
import { MapResultsPage } from '../pages/map-results/map-results';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { ConfigCuentaPage } from '../pages/config-cuenta/config-cuenta';
import { ActualizarPerfilPage } from '../pages/Actualizar-Perfil/Actualizar-Perfil';
import { CambiarEmailPage } from '../pages/Cambiar-Email/Cambiar-Email';
import { CambiarContraPage } from '../pages/Cambiar-Contra/Cambiar-Contra';
import { PerfilEmpresaPage } from '../pages/Perfil-Empresa/Perfil-Empresa';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    SelectuserPage,
    Registro2Page,
    IntroduccionPage,
    InicioPage,
    GestionusuarioPage,
    MapResultsPage,
    NotificacionesPage,
    ConfigCuentaPage,
    ActualizarPerfilPage,
    CambiarEmailPage,
    CambiarContraPage,
    PerfilEmpresaPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    SelectuserPage,
    Registro2Page,
    IntroduccionPage,
    InicioPage,
    GestionusuarioPage,
    MapResultsPage,
    NotificacionesPage,
    ConfigCuentaPage,
    ActualizarPerfilPage,
    CambiarEmailPage,
    CambiarContraPage,
    PerfilEmpresaPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
