import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-page',
  templateUrl: './edicao-page.component.html',
  styleUrls: ['./edicao-page.component.css']
})
export class EdicaoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  modalCartas: boolean = false
  modalJogadores: boolean = false

  
  controleCartas(): void {
    this.modalCartas = !this.modalCartas
  }

  controleJogadores(): void {
    this.modalJogadores = !this.modalJogadores
  }
}
