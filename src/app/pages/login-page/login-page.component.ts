import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Howl } from 'howler';
import { MeuServico } from 'src/app/app.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private dadosCompartilhados: MeuServico, private route: Router, private perfilGuard: SessionStorageService) { }

  minhaArray: Array<Usuario> = new Array(new Usuario("Kauê", "123"), new Usuario("Gabriel", "321"));


  ngOnInit(): void {
    const perfil = { nome: 'João', idade: 30 };
    this.perfilGuard.setItem('perfil', perfil);
  }
  

  usuario: string = "";
  senha: string = ""

  enviarDados() {
    this.minhaArray.forEach(usuario => {
      if (usuario.senha === this.senha && usuario.usuario === this.usuario) {
        console.log(this.perfilGuard.getItem("perfil"))
        this.dadosCompartilhados.atualizarDados(this.usuario, this.senha, 0, 0)
        this.route.navigate(['/main-page'])
      }
    });

  }

 

}

class Usuario {

  usuario: string;
  senha: string

  constructor(usuario: string, senha: string) {
    this.usuario = usuario;
    this.senha = senha;
  }

  mostrarDados(): void {
    console.log(this)
  }

  mostraNome(): string {
    return this.usuario;
  }


}