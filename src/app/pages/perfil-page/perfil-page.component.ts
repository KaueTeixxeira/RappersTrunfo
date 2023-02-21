import { Component, OnInit } from '@angular/core';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  constructor(private meuServico: MeuServico) { }

  nome!: string ;
  senha!: string;
  numVitoria!: number;
  numDerrota!: number;
  porcVitoria!: string;

  ngOnInit(): void {
    console.log(this.meuServico.nome)
    this.nome = this.meuServico.nome
    this.numVitoria = this.meuServico.numVitoria
    this.numDerrota = this.meuServico.numDerrota
    this.porcVitoria = this.meuServico.porcVitoria
  }



}
