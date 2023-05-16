import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/interfaces/Carta';
import { Jogador } from 'src/app/interfaces/Jogador';
import { CartaService } from 'src/app/service/carta.service';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {



  constructor(private route: Router, private cartaService: CartaService, private jogadorService: JogadorService) {}


  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;

  carta!: Carta;
  ngOnInit(): void {
    this.encontraAdversarios();
    this.cartaService.getOneCard(1).subscribe((carta: Carta) => {
      this.carta = carta
      this.url = carta.url
      this.nomeCarta = carta.nome
      this.freestyle = carta.freestyle
      this.originalidade = carta.originalidade
      this.impacto = carta.impacto
      this.maisOuvidas = carta.maisOuvidas
    })
  }
  deckFirstPlayer!: Carta[]
  deckSecondPlayer!: Carta[]

  exit() {
    this.route.navigate(['/main-page'])
  }

  pegarBaralho() {
    this.cartaService.starGame().subscribe((decks: Carta[][]) => {
      this.deckFirstPlayer = decks[0];
      this.deckSecondPlayer = decks[1];
      console.log(this.deckFirstPlayer)
      console.log(this.deckSecondPlayer)
    })
  }

  backgroundColor!: string
  contadorDePosicoes: number = 0
  boldList: number[] = [900, 400, 400, 400]

  onKeyDown(event: KeyboardEvent) {
    console.log(event)
    if (event.key === 'ArrowUp') {
      this.contadorDePosicoes--
    } else if (event.key === 'ArrowDown') {
      this.contadorDePosicoes++
    }

    if (this.contadorDePosicoes == -1) {
      this.contadorDePosicoes = 3
    }
    if (this.contadorDePosicoes == 4) {
      this.contadorDePosicoes = 0
    }
    for (let i = 0; i < 4; i++) {
      if (this.contadorDePosicoes == i) {
        this.boldList[i] = 900;
      } else {
        this.boldList[i] = 400;
      }
    }
  }

  listaDeJogadores!: Jogador[]
  encontraAdversarios() {
    this.jogadorService.getAllPlayers().subscribe((data: Array<Jogador>) => {
      this.listaDeJogadores = data;
      // this.jogadoresFiltrados = this.listaDeJogadores.slice();
    });
  }

  calculaWinRate(jogador: Jogador): string {
    if (jogador.numDerrota != 0 || jogador.numVitoria != 0) {
      return Math.trunc((jogador.numVitoria / (jogador.numVitoria + jogador.numDerrota)) * 100) + "%"
    }
    return "0%"
  }
  


  jogadorSelecionado!: Jogador;

  selecionaJogador(jogadorSelecionado: Jogador) {
    this.jogadorSelecionado = jogadorSelecionado;
  }


  
// public nomePesquisado: string;

// jogadoresFiltrados: Jogador[] = [];

//  filtrarJogadores(): void {
//   console.log(this.nomePesquisado)
//   if (this.nomePesquisado.trim() === '') {
//     this.jogadoresFiltrados = this.listaDeJogadores.slice();
//   } else {
//     this.jogadoresFiltrados = this.listaDeJogadores.filter(jogador =>
//       jogador.nome.toLowerCase().includes(this.nomePesquisado.toLowerCase())
//     );
//   }
// } Fazer a parte da filtragem





}
