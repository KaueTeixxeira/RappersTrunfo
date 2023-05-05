import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.css']
})
export class ExitButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() refreshEmitter: EventEmitter<any> = new EventEmitter()

  fechar(){
    this.refreshEmitter.emit()
  }
}
