import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { CartaService } from 'src/app/service/carta.service';
import { JogadorService } from 'src/app/service/jogador.service';
import { JogadoresPageComponent } from '../jogadores-page/jogadores-page.component';
import { Carta } from 'src/app/interfaces/Carta';
import { Jogador } from 'src/app/interfaces/Jogador';


@Component({
  selector: 'app-edicao-page',
  templateUrl: './edicao-page.component.html',
  styleUrls: ['./edicao-page.component.css']
})
export class EdicaoPageComponent implements OnInit {

  constructor(private cartaSevice: CartaService, private jogadorService : JogadorService) { }

  ngOnInit(): void {
    this.refresh();
  }
  modalCartas: boolean = false
  modalJogadores: boolean = false
  modalEdicaoCartas: boolean = false
  modalEdicaoJogador: boolean = false

  listaDeCartas!: Array<Carta>;
  listaDeJogadores!: Array<Jogador>;

  carta: Carta = {id: 0, url: "", nome: "", freestyle: 0, originalidade: 0, impacto: 0, maisOuvidas: 0,ranking: 'C'}; 
  jogador: Jogador = {id: 0,nome: "",numVitoria: 0, numDerrota: 0, senha:""};

  verificacao!: boolean;
  criacao!: boolean;
  
  controleCartas(): void {
    this.verificacao = true;
    this.modalCartas = !this.modalCartas
  }

  controleJogadores(): void {
    this.verificacao = false;
    this.modalJogadores = !this.modalJogadores
  }

  editarCarta(carta: Carta) {
    this.carta = carta;
    console.log(carta)
    console.log(this.carta)
  }

  abrirEdicaoCartas(carta: Carta){
    this.verificacao = true
    this.carta = carta
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }

  abrirEdicaoJogadores(jogador: Jogador){
    this.jogador = jogador;
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }


  fecharEdicaoCartas(){
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }
  

  calculaWinRate(jogador: Jogador): string{
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return  Math.trunc((jogador.numVitoria/(jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }

  
  criarJogador(){
    this.verificacao = false
    this.jogador = {id: 0,nome: "",numVitoria: 0, numDerrota: 0, senha:""};;
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }


  criarCarta(){
    this.verificacao = true
    this.carta = {id: 0, url: "", nome: "", freestyle: 0, originalidade: 0, impacto: 0, maisOuvidas: 0,ranking: 'C'};
    this.modalEdicaoCartas = !this.modalEdicaoCartas
  }

  // FAZER UM BOTAO DE OUT PUT PARA DAR REFRESH NAS CARTAS E JOGADORES ASSIM QUE CRIADOS OU EDITADOS !!!!

  refresh() {
    this.cartaSevice.getAllCards().subscribe((data: Array<Carta>) => {
      this.listaDeCartas = data;
    });

    this.jogadorService.getAllPlayers().subscribe((data: Array<Jogador>) => {
      this.listaDeJogadores = data;
    });
  }
}



