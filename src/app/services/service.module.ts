import { NgModule } from '@angular/core';

/* Modulos */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SidebarService,
  SharedsService,
  UsuarioService,
  LoginGuardGuard
} from './service.index'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedsService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
