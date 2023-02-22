import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-component',
  templateUrl: './edicao-component.component.html',
  styleUrls: ['./edicao-component.component.css']
})
export class EdicaoComponentComponent implements OnInit {

  constructor() { }

  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;


  ngOnInit(): void {
    console.log(this.ranking)
    console.log(this.freestyle)
  }

  adicionarCarta() {
    console.log(this.nomeCarta)
    console.log(this.ranking)
    console.log(this.freestyle)
  }

  @Input() 
  verificacao!: boolean;

}
