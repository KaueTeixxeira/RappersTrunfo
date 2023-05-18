import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private route: Router,
    private jogadorService: JogadorService) { }

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
  alertColor: String = "#ffffff";
  frase: String = "Perfil editado com sucesso!"

  ngOnInit(): void {
    this.reloadPerfil();
  }

  editaPerfil() {
    this.visualizar = !this.visualizar
    this.alertBoolean = false;
    this.reloadPerfil();
  }
  modalzera(){
    this.alertBoolean = !this.alertBoolean
  }
  
  postEdicoes(){//arrumar essa merda de verificação
    if (this.senha != ""){
      let player = {
        id: this.id,
        nome: this.nome,
        numVitoria: this.numVitoria,
        numDerrota: this.numDerrota,
        senha: this.senha
      } 
      this.jogadorService.setPerfil(player)
      this.jogadorService.editPlayer(this.id, player).subscribe((data: Jogador) => {
        console.log(data)
      })
      this.frase = "Perfil editado com sucesso"
      this.alertColor = "#5ea762"
      this.modalzera();
    } else {
      this.alertColor = "#f72f32"
      this.frase = "Senha inválida"
      this.modalzera();
    }
  }

  reloadPerfil(){
    this.informacoes = sessionStorage.getItem("perfil")
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
    this.senha = this.jogador.senha
    this.id = this.jogador.id;
  }

  exit(){
    this.route.navigate(['/main-page'])
  }
}


