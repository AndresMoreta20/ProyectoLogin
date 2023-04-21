import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'http://apiservicios.ecuasolmovsa.com:3009/api/Usuarios'; // updated URL to use HTTP

  constructor(private http: HttpClient) { }

  verificarCredenciales(usuario: string, password: string) {
    const url = `${this.apiUrl}?usuario=${usuario}&password=${password}`;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }
}
