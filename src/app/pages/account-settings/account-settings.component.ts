import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajutes: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  changeColor(color: string, link: any) {

    this.applyCheck(link);
    this._ajutes.aplicarTema(color);
  }

  applyCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      //en java SCRIPT PARA REMOVER UNA CLASE ES EL SIGUIENDE CODIGO 
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajutes.ajustes.tema;
    for (let ref of selectores) {
      //en java SCRIPT PARA REMOVER UNA CLASE ES EL SIGUIENDE CODIGO 
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
