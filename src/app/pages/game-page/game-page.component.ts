import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  exit(){
    this.route.navigate(['/main-page'])
  }
}
