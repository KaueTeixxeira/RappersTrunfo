import { Injectable } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class MeuServico {

  nome!: string ;
  senha!: string;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria: string = "0%";
  listaDeCartas: Array<Carta> = [{url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",nomeCarta: "Dr.Dre1",freestyle: 87,originalidade: 96,impacto: 98,maisOuvidas: 75,ranking: 'S'},
  {url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",nomeCarta: "Dr.Dre2",freestyle: 87,originalidade: 96,impacto: 98,maisOuvidas: 75,ranking: 'S'},
  {url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",nomeCarta: "Dr.Dre3",freestyle: 87,originalidade: 96,impacto: 98,maisOuvidas: 75,ranking: 'S'},
  {url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",nomeCarta: "Dr.Dre4",freestyle: 87,originalidade: 96,impacto: 98,maisOuvidas: 90,ranking: 'S'}, {url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",nomeCarta: "Dr.Dre5",freestyle: 87,originalidade: 96,impacto: 98,maisOuvidas: 90,ranking: 'A'}];
  listaDeUsuarios: Array<Jogador> = [{nome: "Kauê",numVitoria: 1, numDerrota: 1}, {nome: "Gabriel", numVitoria: 0, numDerrota:0}]

  
  constructor(){}

  atualizarDados(nome: string, senha:string, numVitoria: number, numDerrota:number) {
    this.nome = nome
    this.senha = senha
    this.numVitoria = numVitoria;
    this.numDerrota = numDerrota;
    if (numDerrota != 0 || numVitoria != 0) {
      this.porcVitoria = Math.trunc((numVitoria/(numVitoria + numDerrota)) * 100) + "%"
    }
  }

  
}

interface Carta {
  url: string;
  nomeCarta: string;
  freestyle: number;
  originalidade: number;
  impacto: number;
  maisOuvidas: number;
  ranking: string;
}

interface Jogador {
  nome: string;
  numVitoria: number;
  numDerrota: number;
}