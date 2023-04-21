import { Component } from '@angular/core';
import { UsuarioService} from './usuario.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsuarioService]
})
export class AppComponent {
  title = 'app';
  usuario = '';
  password = '';
  resultado = '';

  constructor(private usuarioService: UsuarioService) { }

  verificar() {
    this.usuarioService.verificarCredenciales(this.usuario, this.password)
      .subscribe(
        (response) => {
          this.resultado = response.toString();
        },
        (error) => {
          this.resultado = 'error';
        }
      );
  }
}
