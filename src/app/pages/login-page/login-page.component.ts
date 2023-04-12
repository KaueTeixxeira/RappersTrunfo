import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Howl } from 'howler';
import { MeuServico } from 'src/app/app.service';
import { JogadorService } from 'src/app/service/jogador.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';
import { Jogador } from '../jogadores-page/jogadores-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private jogadorService: JogadorService, private route: Router, private perfilGuard: SessionStorageService) { }



  ngOnInit(): void {
  }
  

  usuario!: string;
  senha: string = ""

  enviarDados() {

    // this.jogadorService.getOnePlayer(this.usuario)
    this.jogadorService.getOnePlayer(this.usuario).subscribe((jogador: Jogador) => {
      if (jogador != null) {
        console.log(jogador)
        if(jogador.nome === this.usuario && jogador.senha === this.senha){
          this.perfilGuard.setItem('perfil', jogador);
          this.route.navigate(['/main-page'])
        }
      } 
    })
    // this.minhaArray.forEach(usuario => {
    //   if (usuario.senha === this.senha && usuario.usuario === this.usuario) {
    //     console.log(this.perfilGuard.getItem("perfil"))
    //     this.dadosCompartilhados.atualizarDados(this.usuario, this.senha, 0, 0)
    //     this.route.navigate(['/main-page'])
    //   }
    // });

  }

 

}
