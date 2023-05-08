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

  ngOnInit(): void {
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
    })
  }
  
}
