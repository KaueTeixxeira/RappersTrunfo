import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { Jogador } from 'src/app/interfaces/Jogador';
import { JogadorService } from 'src/app/service/jogador.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {



  visualizar = true;
  constructor(private meuServico: MeuServico, private perfilGuard: SessionStorageService, private jogadorService: JogadorService) { }

  nome!: String ;
  senha!: String;
  senhaPerfil!:String;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria!: string;
  informacoes: any;
  jogador!: Jogador;

  ngOnInit(): void {
    this.informacoes = sessionStorage.getItem("perfil")
    console.log(JSON.parse(this.informacoes))
    this.jogador = JSON.parse(this.informacoes);
    this.nome = this.jogador.nome;
    this.numVitoria =  this.jogador.numVitoria
    this.numDerrota =  this.jogador.numDerrota
    if (this.jogador.numDerrota != 0 && this.jogador.numVitoria != 0) {
      this.porcVitoria = Math.trunc((this.jogador.numVitoria/(this.jogador.numVitoria + this.jogador.numDerrota)) * 100) + "%"
    } else{
      this.porcVitoria = "0%"
    }
    this.senhaPerfil = this.jogador.senha
  }

  editaPerfil() {
    if (this.senhaPerfil == this.senha && this.senhaPerfil != this.senha && this.senha != null){
      this.informacoes = sessionStorage.getItem("perfil")
      let jogador = {
        id: this.informacoes.id,
        nome: this.nome,
        numVitoria: this.informacoes.numVitoria,
        numDerrota: this.informacoes.numDerrota,
        senha: this.senha
      } 
      this.perfilGuard.setItem('perfil', jogador);
      this.jogadorService.editPlayer(this.informacoes.id, jogador).subscribe((data: Jogador) => {
        console.log(data)
      })
    }
    this.visualizar = !this.visualizar
  }


}


