import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  headerImg : string = "/assets/imagens/logoTrunfo.png"

  exit(){
    sessionStorage.removeItem('perfil');
    this.route.navigate([""])
  }
}
