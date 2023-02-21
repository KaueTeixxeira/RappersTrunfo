import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogadores-page',
  templateUrl: './jogadores-page.component.html',
  styleUrls: ['./jogadores-page.component.css']
})
export class JogadoresPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log( Math.trunc((0/(0 + 1)) * 100))
    
  }

  listaDeJogadores: Array<Jogador> = [new Jogador(1,"Kauê",1,2),new Jogador(2,"Gabriel",0,1)]

}

class Jogador{

  id!:number
  nome!: String;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria: string = "0%";

  constructor(id: number,nome:String, numVitoria: number, numDerrota: number) {
    this.id = id;
    this.nome = nome;
    this.numVitoria = numVitoria;
    this.numDerrota = numDerrota;
    if (numDerrota != 0 || numVitoria != 0) {
      this.porcVitoria = Math.trunc((numVitoria/(numVitoria + numDerrota)) * 100) + "%"
    }
  }
}
