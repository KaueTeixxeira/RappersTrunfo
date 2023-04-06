import { Component, Input, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';
import { Carta } from 'src/app/pages/cartas-page/cartas-page.component';
import { Jogador } from 'src/app/pages/jogadores-page/jogadores-page.component';
import { CartaService } from 'src/app/service/carta.service';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-edicao-component',
  templateUrl: './edicao-component.component.html',
  styleUrls: ['./edicao-component.component.css']
})
export class EdicaoComponentComponent implements OnInit {

  constructor(private cartaService: CartaService, private jogadorService: JogadorService) { }

  alertBoolean: boolean = false
  habilitado: boolean = false
  frase!: string;

  url!: string;
  nomeCarta!: string;
  freestyle!: number;
  originalidade!: number;
  impacto!: number;
  maisOuvidas!: number;
  ranking!: string;

  nome!: String;
  numVitoria!: number;
  numDerrota!: number;
  senha!: String;


  ngOnInit(): void {

    if (this.carta.nome != "" || this.jogador.nome != "") {
      console.log(this.carta.id)
      console.log(this.verificacao)
      this.url = this.carta.url
      this.nomeCarta = this.carta.nome
      this.freestyle = this.carta.freestyle
      this.originalidade = this.carta.originalidade
      this.impacto = this.carta.impacto
      this.maisOuvidas = this.carta.maisOuvidas
      if (this.carta.ranking == "A") {
        this.ranking = "A"
      } else if (this.carta.ranking == "B") {
        this.ranking = "B"
      } else if (this.carta.ranking == "C") {
        this.ranking = "C"
      } else {
        this.ranking = "S"
      }
      this.nome = this.jogador.nome
      this.numVitoria = this.jogador.numVitoria
      this.numDerrota = this.jogador.numDerrota
    }
  }

  adicionarCarta() {
    let carta = new Carta(this.url,this.nomeCarta,this.freestyle,
      this.originalidade,this.impacto,this.maisOuvidas,this.ranking);

    if (this.carta.id === 0) {
      this.cartaService.createCard(carta).subscribe((data: Carta) => {
        console.log(data)
        
      })
      this.frase = "Carta cadastrada com sucesso!"
    } else {
      this.cartaService.editCard(this.carta.id,carta).subscribe((data: Carta) => {
        console.log(data)
      })
      this.frase = "Carta editada com sucesso!"
    }
    this.modalzera();
  }

  adicionarJogador() {
    let jogador = new Jogador(this.nome, this.numVitoria,this.numDerrota)
    // this.meuServico.listaDeUsuarios.push({ nome: this.nome, numVitoria: this.numVitoria, numDerrota: this.numDerrota })
    if (this.jogador.id === 0){
      this.jogadorService.createPlayer(jogador).subscribe((data: Jogador) => {
        console.log(data)
      })
      this.frase = "Jogador cadastrado com sucesso!"
    } else {
      this.jogadorService.editPlayer(this.jogador.id, jogador).subscribe((data: Jogador) => {
        console.log(data)
      })
      this.frase = "Jogador editado com sucesso!"
    }
    this.modalzera();
  }

  excluirCarta() {
    this.cartaService.deleteCard(this.carta.id).subscribe((data: Carta) => {
      console.log(data)
    })
    this.frase = "Carta excluída com sucesso!"
    this.modalzera();
  }

  excluirJogador(){
   this.jogadorService.deletePlayer(this.jogador.id).subscribe((data: Carta) => {
    console.log(data)
  })
  this.frase = "Jogador excluído com sucesso!"
  this.modalzera();

  }

  @Input()
  verificacao!: boolean;

  @Input()
  carta!: Carta;

  @Input()
  jogador!: Jogador;

  modalzera(){
    this.alertBoolean = !this.alertBoolean
  }
  


}





