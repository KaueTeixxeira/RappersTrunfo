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

  id!: number;
  nome!: String ;
  senha!: String;
  novaSenha!: String;
  senhaPerfil!:String;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria!: string;
  informacoes: any;
  jogador!: Jogador;

  alertBoolean: boolean = false;
  frase: String = "Perfil editado com sucesso!"

  ngOnInit(): void {
    this.informacoes = sessionStorage.getItem("perfil")
    console.log(JSON.parse(this.informacoes))
    this.jogador = JSON.parse(this.informacoes);
    console.log(this.jogador.id)
    this.nome = this.jogador.nome;
    this.numVitoria =  this.jogador.numVitoria
    this.numDerrota =  this.jogador.numDerrota
    if (this.jogador.numDerrota != 0 && this.jogador.numVitoria != 0) {
      this.porcVitoria = Math.trunc((this.jogador.numVitoria/(this.jogador.numVitoria + this.jogador.numDerrota)) * 100) + "%"
    } else{
      this.porcVitoria = "0%"
    }
    this.senhaPerfil = this.jogador.senha
    this.id = this.jogador.id;
  }

  editaPerfil() {
    this.visualizar = !this.visualizar
    this.alertBoolean = false;
    this.senha = ""
    this.novaSenha = ""
  }
  modalzera(){
    this.alertBoolean = !this.alertBoolean
  }
  
  postEdicoes(){//arrumar essa merda de verificação
    if (this.senhaPerfil == this.senha && this.senhaPerfil != this.novaSenha && this.senha != null){
      let player = {
        id: this.id,
        nome: this.nome,
        numVitoria: this.numVitoria,
        numDerrota: this.numDerrota,
        senha: this.novaSenha
      } 
      this.perfilGuard.setItem('perfil', player);
      console.log("a : " + this.id)
      this.jogadorService.editPlayer(this.id, player).subscribe((data: Jogador) => {
        console.log(data)
      })
      this.modalzera();
    } 
  }

}


