import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Howl } from 'howler';
import { MeuServico } from 'src/app/app.service';
import { Jogador } from 'src/app/interfaces/Jogador';
import { JogadorService } from 'src/app/service/jogador.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private jogadorService: JogadorService, private route: Router, private perfilGuard: SessionStorageService) { }
  logar = true


  ngOnInit(): void {
  }
  

  usuario!: string;
  senha: string = ""

  confirmacaoSenha: string = ""

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

  criarConta(){
    let player: Jogador = {id: 0, nome: this.usuario, numDerrota: 0, numVitoria: 0, senha: this.senha}
    let verificaUsuario = true;
    if (this.senha === this.confirmacaoSenha){
      this.jogadorService.getAllPlayers().subscribe((data: Jogador[]) => {
        for (let jogador of data){
          if (jogador.nome == player.nome){
            verificaUsuario = false;
          }
        }
      })
      if (verificaUsuario) {
        this.jogadorService.createPlayer(player).subscribe((data: Jogador) => {
          console.log(data)
          this.enviarDados()
        })
      }
    }
  }
  abreCadastro(){
    this.logar = false;
  }


  // VERIFICAR ALGUMAS EDIÇÕES E VERIFICAR O CALCULO DE PORCENTAGEM FEITO PARA MOSTRAR PARA O USUARIO
 

}
