import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionusuarioPage } from './gestionusuario';

@NgModule({
  declarations: [
    GestionusuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionusuarioPage),
  ],
})
export class GestionusuarioPageModule {}
