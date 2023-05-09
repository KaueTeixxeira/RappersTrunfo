import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/interfaces/Carta';
import { CartaService } from 'src/app/service/carta.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private route: Router, private cartaService: CartaService) { }


  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;

  carta!: Carta;
  ngOnInit(): void {
    this.cartaService.getOneCard(1).subscribe((carta : Carta) => {
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

  exit(){
    this.route.navigate(['/main-page'])
  }

  pegarBaralho(){
    this.cartaService.starGame().subscribe((decks: Carta[][]) => { 
      this.deckFirstPlayer = decks[0];
      this.deckSecondPlayer = decks[1];
      console.log(this.deckFirstPlayer)
      console.log(this.deckSecondPlayer)
    })
  }

  backgroundColor!: string
  contadorDePosicoes: number = 0
  boldList: number[] =  [600,400,400,400]

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.contadorDePosicoes --
    } else if (event.key === 'ArrowDown') {
      this.contadorDePosicoes ++
    }

    if (this.contadorDePosicoes == -1) {
      this.contadorDePosicoes = 3
    }
    if (this.contadorDePosicoes == 4) {
      this.contadorDePosicoes = 0
    }
    for (let i = 0; i < 4; i ++) {
      if (this.contadorDePosicoes == i) {
        this.boldList[i] = 600;
      } else {
        this.boldList[i] = 400;
      }
    }
    
  }
  
}
