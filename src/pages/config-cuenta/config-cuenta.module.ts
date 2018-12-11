import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigCuentaPage } from './config-cuenta';

@NgModule({
  declarations: [
    ConfigCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigCuentaPage),
  ],
})
export class ConfigCuentaPageModule {}
