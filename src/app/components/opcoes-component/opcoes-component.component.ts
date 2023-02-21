import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes-component',
  templateUrl: './opcoes-component.component.html',
  styleUrls: ['./opcoes-component.component.css']
})
export class OpcoesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  teste: HTMLElement | undefined;
}
