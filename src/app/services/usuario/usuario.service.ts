import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  _usuario: Usuario;
  _token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    console.log('Servicio de USUARIO listo.');
    this.cargarStorage();
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this._token = localStorage.getItem('token');
      this._usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this._token = '';
      this._usuario = null;
    }
  }

  estaLogueado() {
    return (this._token.length > 5) ? true : false;
  }

  url: string = URL_SERVICIOS.concat('/usuario');

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this._usuario = usuario;
    this._token = token;
  }

  login(usuario: Usuario, recordar: boolean) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS.concat('/login');
    return this.http.post(url, usuario)
      .pipe(
        map((res: any) => {
          this.guardarStorage(res.id, res.token, res.usuario);
          return { login: true };
        }));
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, { token }).pipe(
      map((res: any) => {
        this.guardarStorage(res.id, res.token, res.usuario);
        return { login: true };
      })
    );
  }

  logout(): void {
    this._usuario = null;
    this._token = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }


  crearUsuario(usuario: Usuario) {
    return this.http.post(this.url, usuario).pipe(map((response: any) => {
      Swal.fire('Usuario creado', response.usuario.email, 'success');
      return response.usuario
    })
    );
  }


}
