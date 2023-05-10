import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/interfaces/Carta';

@Component({
  selector: 'app-carta-component',
  templateUrl: './carta-component.component.html',
  styleUrls: ['./carta-component.component.css']
})
export class CartaComponentComponent implements OnInit {



  @Input()
  carta!: Carta

  @Input()
  verificaRota!: boolean

  constructor() { }

  ngOnInit(): void {
    if (this.verificaRota) {
      this.boldList = [900, 400, 400, 400]
    } else {
      this.boldList = [400, 400, 400, 400]
    }
  }
  backgroundColor!: string
  contadorDePosicoes: number = 0
  boldList!: number[];

  onKeyDown(event: KeyboardEvent) {
    if (this.verificaRota) {
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
    } else {
      console.log("Rota inválida")
    }
  }
}
