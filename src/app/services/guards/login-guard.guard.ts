import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _router: Router,
    public _usuarioService: UsuarioService) {

  }

  canActivate(): boolean {
    if (this._usuarioService.estaLogueado()) {
      console.log('PASO EL GUARD');
      return true;
    } else {
      console.log('Bloqueado por el Guard');
      this._router.navigate(['/login']);
      return false;
    }
  }

}
